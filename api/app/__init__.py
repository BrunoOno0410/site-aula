from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS
import os

mongo = PyMongo()


def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/*": {"origins": "*"}})

    # Load MongoDB Atlas URI from environment variable
    app.config["MONGO_URI"] = os.getenv(
        "MONGODB_URI",
        "mongodb+srv://brunogiordanoono:oTElzVRNGLDNVQh3@cluster0.p9h3wxx.mongodb.net/tecnus?retryWrites=true&w=majority&appName=Cluster0",
    )

    mongo.init_app(app)

    with app.app_context():
        from .routes import main_bp

        app.register_blueprint(main_bp)

    return app
