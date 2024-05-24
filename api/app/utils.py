from .models import ClassModuleInDB, UserInDB


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
