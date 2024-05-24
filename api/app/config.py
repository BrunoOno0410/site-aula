import os


class Config:
    MONGO_URI = os.getenv(
        "MONGODB_URI",
        "mongodb+srv://brunogiordanoono:oTElzVRNGLDNVQh3@cluster0.p9h3wxx.mongodb.net/tecnus?retryWrites=true&w=majority&appName=Cluster0",
    )
