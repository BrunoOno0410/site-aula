from flask import Blueprint, request, jsonify
from bson.objectid import ObjectId
from .models import ClassModule, ClassModuleInDB, User, UserInDB, Class
from .utils import class_module_helper, user_helper
from . import mongo
from pydantic import ValidationError
import bcrypt

main_bp = Blueprint("main", __name__)

aulas_collection = mongo.db.aulas
login_collection = mongo.db.login

# Your route definitions here


@main_bp.route("/class-modules/", methods=["POST"])
def create_class_module():
    try:
        class_module = ClassModule(**request.json)
    except ValidationError as e:
        return jsonify(e.errors()), 400

    result = aulas_collection.insert_one(class_module.dict())
    new_class_module = aulas_collection.find_one({"_id": result.inserted_id})
    return jsonify(class_module_helper(new_class_module).dict()), 201


@main_bp.route("/class-modules/", methods=["GET"])
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


@main_bp.route("/class-modules/<module_id>", methods=["GET"])
def get_class_module(module_id):
    class_module = aulas_collection.find_one({"_id": ObjectId(module_id)})
    if class_module:
        return jsonify(class_module_helper(class_module).dict()), 200
    return jsonify({"error": "Class module not found"}), 404


@main_bp.route("/class-modules/<module_id>", methods=["PUT"])
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


@main_bp.route("/class-modules/<module_id>", methods=["DELETE"])
def delete_class_module(module_id):
    delete_result = aulas_collection.delete_one({"_id": ObjectId(module_id)})
    if delete_result.deleted_count == 1:
        return jsonify({"message": "Class module deleted"}), 200
    return jsonify({"error": "Class module not found"}), 404


@main_bp.route("/users", methods=["POST"])
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


@main_bp.route("/login", methods=["POST"])
def login_user():
    data = request.json
    user = login_collection.find_one({"email": data["email"]})
    if user and bcrypt.checkpw(data["password"].encode("utf-8"), user["password"]):
        return jsonify(user_helper(user).dict()), 200
    return jsonify({"error": "Invalid email or password"}), 401
