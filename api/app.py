from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from pydantic import BaseModel, Field, ValidationError
from bson.objectid import ObjectId
import os

app = Flask(__name__)

# Load MongoDB Atlas URI from environment variable
app.config["MONGO_URI"] = os.getenv("MONGODB_URI", "your_default_mongodb_uri_here")

mongo = PyMongo(app)
db = mongo.db
collection = db.class_modules


# Pydantic models
class Class(BaseModel):
    name: str
    description: str


class ClassModule(BaseModel):
    title: str
    classes: list[Class] = Field(default_factory=list)


class ClassModuleInDB(ClassModule):
    id: str


# Utility to convert MongoDB document to Pydantic model
def class_module_helper(class_module) -> ClassModuleInDB:
    return ClassModuleInDB(
        id=str(class_module["_id"]),
        title=class_module["title"],
        classes=class_module["classes"],
    )


@app.route("/class-modules/", methods=["POST"])
def create_class_module():
    try:
        class_module = ClassModule(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    result = collection.insert_one(class_module.dict())
    new_class_module = collection.find_one({"_id": result.inserted_id})
    return jsonify(class_module_helper(new_class_module).dict()), 201


@app.route("/class-modules/", methods=["GET"])
def get_class_modules():
    page = int(request.args.get("page", 1))
    page_size = int(request.args.get("page_size", 10))

    class_modules = []
    for class_module in collection.find().skip((page - 1) * page_size).limit(page_size):
        class_modules.append(class_module_helper(class_module).dict())

    total_count = collection.count_documents({})
    return (
        jsonify(
            {
                "class_modules": class_modules,
                "total_count": total_count,
                "page": page,
                "page_size": page_size,
            }
        ),
        200,
    )


@app.route("/class-modules/<module_id>", methods=["GET"])
def get_class_module(module_id):
    class_module = collection.find_one({"_id": ObjectId(module_id)})
    if class_module:
        return jsonify(class_module_helper(class_module).dict()), 200
    return jsonify({"error": "Class module not found"}), 404


@app.route("/class-modules/<module_id>", methods=["PUT"])
def update_class_module(module_id):
    try:
        class_module = ClassModule(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    update_result = collection.update_one(
        {"_id": ObjectId(module_id)}, {"$set": class_module.dict()}
    )

    if update_result.modified_count == 1:
        updated_class_module = collection.find_one({"_id": ObjectId(module_id)})
        return jsonify(class_module_helper(updated_class_module).dict()), 200
    return jsonify({"error": "Class module not found"}), 404


@app.route("/class-modules/<module_id>", methods=["DELETE"])
def delete_class_module(module_id):
    delete_result = collection.delete_one({"_id": ObjectId(module_id)})
    if delete_result.deleted_count == 1:
        return jsonify({"message": "Class module deleted"}), 200
    return jsonify({"error": "Class module not found"}), 404


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
