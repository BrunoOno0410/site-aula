from pydantic import BaseModel, Field, ValidationError, EmailStr


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
