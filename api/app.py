from flask import Flask, request, jsonify, redirect, url_for
from flask_pymongo import PyMongo
from pydantic import BaseModel, Field, ValidationError, EmailStr
from bson.objectid import ObjectId
from flask_cors import CORS
import os
import bcrypt

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Load MongoDB Atlas URI from environment variable
app.config["MONGO_URI"] = os.getenv(
    "MONGODB_URI",
    "mongodb+srv://brunogiordanoono:oTElzVRNGLDNVQh3@cluster0.p9h3wxx.mongodb.net/tecnus?retryWrites=true&w=majority&appName=Cluster0",
)

mongo = PyMongo(app)
db = mongo.db
aulas_collection = db.aulas
login_collection = db.login


# Pydantic models
class Class(BaseModel):
    name: str
    description: str


class ClassModule(BaseModel):
    title: str
    classes: list[Class] = Field(default_factory=list)


class ClassModuleInDB(ClassModule):
    id: str


class User(BaseModel):
    email: EmailStr
    name: str
    password: str


class UserInDB(User):
    id: str


# Utility to convert MongoDB document to Pydantic model
def class_module_helper(class_module) -> ClassModuleInDB:
    return ClassModuleInDB(
        id=str(class_module["_id"]),
        title=class_module["title"],
        classes=class_module["classes"],
    )


def user_helper(user) -> UserInDB:
    return UserInDB(
        id=str(user["_id"]),
        email=user["email"],
        name=user["name"],
        password=user["password"],
    )


@app.route("/class-modules/", methods=["POST"])
def create_class_module():
    try:
        class_module = ClassModule(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    result = aulas_collection.insert_one(class_module.dict())
    new_class_module = aulas_collection.find_one({"_id": result.inserted_id})
    return jsonify(class_module_helper(new_class_module).dict()), 201


@app.route("/class-modules/", methods=["GET"])
def get_class_modules():
    page = int(request.args.get("page", 1))
    page_size = int(request.args.get("page_size", 10))

    class_modules = []
    for class_module in (
        aulas_collection.find().skip((page - 1) * page_size).limit(page_size)
    ):
        class_modules.append(class_module_helper(class_module).dict())

    total_count = aulas_collection.count_documents({})
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
    class_module = aulas_collection.find_one({"_id": ObjectId(module_id)})
    if class_module:
        return jsonify(class_module_helper(class_module).dict()), 200
    return jsonify({"error": "Class module not found"}), 404


@app.route("/class-modules/<module_id>", methods=["PUT"])
def update_class_module(module_id):
    try:
        class_module = ClassModule(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    update_result = aulas_collection.update_one(
        {"_id": ObjectId(module_id)}, {"$set": class_module.dict()}
    )

    if update_result.modified_count == 1:
        updated_class_module = aulas_collection.find_one({"_id": ObjectId(module_id)})
        return jsonify(class_module_helper(updated_class_module).dict()), 200
    return jsonify({"error": "Class module not found"}), 404


@app.route("/class-modules/<module_id>", methods=["DELETE"])
def delete_class_module(module_id):
    delete_result = aulas_collection.delete_one({"_id": ObjectId(module_id)})
    if delete_result.deleted_count == 1:
        return jsonify({"message": "Class module deleted"}), 200
    return jsonify({"error": "Class module not found"}), 404


@app.route("/users", methods=["POST"])
def create_user():
    try:
        user = User(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    existing_user = login_collection.find_one({"email": user.email})
    if existing_user:
        return jsonify({"error": "User with this email already exists"}), 400

    hashed_password = bcrypt.hashpw(user.password.encode("utf-8"), bcrypt.gensalt())
    user_data = user.dict()
    user_data["password"] = hashed_password

    result = login_collection.insert_one(user_data)
    new_user = login_collection.find_one({"_id": result.inserted_id})
    return jsonify(user_helper(new_user).dict()), 201


@app.route("/login", methods=["POST"])
def login_user():
    data = request.json
    user = login_collection.find_one({"email": data["email"]})
    if user and bcrypt.checkpw(data["password"].encode("utf-8"), user["password"]):
        return jsonify(user_helper(user).dict()), 200
    return jsonify({"error": "Invalid email or password"}), 401


@app.route("/aulas", methods=["POST"])
def create_aula():
    try:
        aula = Class(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    result = aulas_collection.insert_one(aula.dict())
    new_aula = aulas_collection.find_one({"_id": result.inserted_id})
    return jsonify({"_id": str(new_aula["_id"]), **new_aula}), 201


@app.route("/aulas/<aula_id>", methods=["PUT"])
def update_aula(aula_id):
    try:
        aula = Class(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    update_result = aulas_collection.update_one(
        {"_id": ObjectId(aula_id)}, {"$set": aula.dict()}
    )

    if update_result.modified_count == 1:
        updated_aula = aulas_collection.find_one({"_id": ObjectId(aula_id)})
        return jsonify({"_id": str(updated_aula["_id"]), **updated_aula}), 200
    return jsonify({"error": "Aula not found"}), 404


@app.route("/aulas/<aula_id>", methods=["DELETE"])
def delete_aula(aula_id):
    delete_result = aulas_collection.delete_one({"_id": ObjectId(aula_id)})
    if delete_result.deleted_count == 1:
        return jsonify({"message": "Aula deleted"}), 200
    return jsonify({"error": "Aula not found"}), 404


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
