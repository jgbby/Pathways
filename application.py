import os
from flask import Flask, flash, jsonify, redirect, render_template, request, session

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/rbridges')
def rbridges():
    return render_template("rbridges.html") 

if __name__ == "__main__":
    app.run(debug=True)
    #app.debug = True
    #port = int(os.environ.get("PORT", 5000))
    #app.run(host="localhost", port=port)
