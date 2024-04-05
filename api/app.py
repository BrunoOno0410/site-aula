from flask import Flask, request

app = Flask(__name__)


# TESTE REQUEST RESPONSE DATA
@app.route("/", methods=["POST"])
def hello_world():
    return f"{request.json['name']}"


# TESTE RESPONSE STATUS CODE
@app.route("/response", methods=["POST"])
def responseCode():
    return f"{request.json['name']}", 201


# TESTE BASIC AUTH
@app.route("/auth", methods=["GET"])
def auth():
    return f"{request.authorization.password}"
