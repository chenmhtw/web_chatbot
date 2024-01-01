from flask import Flask, render_template, request, session, redirect
from waitress import serve




app = Flask(__name__)
app.config["SECRET_KEY"] = "letsgobaby"

@app.route("/", methods=["POST", "GET"])
def home():
    return render_template("home.html")

if __name__ == '__main__': # defalut type way => run the website
    serve(app, host="0.0.0.0", port=8000)