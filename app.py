from flask import Flask, render_template, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd
from sqlalchemy import create_engine
import os
import numpy as np
import pickle
import json

model = pickle.load(open('intubation_pred.pkl','rb'))

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

@app.route('/form/', methods=['POST'])
def predict():
    # get data
    data = request.get_json(force=True)
    print(data)
    data_df = pd.DataFrame(pd.Series(data)).T
    print(data_df)

    # predictions
    result = model.predict(data_df)

    # send back to browser
    output = {'results': int(result[0])}
    # return data
    return jsonify(results=output)


@app.route("/Graphic2")
def Graphic2():
    return render_template("Graphic2.html")

@app.route("/Graphic3")
def Graphic3():
    return render_template("Graphic3.html")

@app.route("/Graphic4")
def Graphic4():
    return render_template("Graphic4.html")


@app.route("/Readmore")
def Readmore():
    return render_template("Readmore.html")

@app.route("/search1")
def search1():
    return render_template("search1.html")

@app.route("/search2")
def search2():
    return render_template("search2.html")

@app.route("/form")
def form():
    return render_template("form.html")

if __name__ == '__main__':
    app.run(port = 5000, debug=True)