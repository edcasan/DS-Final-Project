from flask import Flask, render_template, jsonify, request
from flask_cors import CORS, cross_origin
import pandas as pd
from sqlalchemy import create_engine
import os
import numpy as np
import pickle
import json

model = pickle.load(open('intubation_pred.pkl','rb'))
<<<<<<< HEAD
=======
app = Flask(__name__)

@app.route('/api/', methods=['POST'])
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
>>>>>>> e209193b831ba3a36c25b783ef3bea9c9c69142c

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template("index.html")

<<<<<<< HEAD
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

=======
@app.route("/Readmore")
def Readmore():
    return render_template("Readmore.html")

@app.route("/Graphic2")
def Graphic2():
    return render_template("Graphic2.html")

@app.route("/Graphic3")
def Graphic3():
    return render_template("Graphic3.html")

@app.route("/form")
def form():
    return render_template("form.html")

@app.route("/search1")
def search1():
    return render_template("search1.html")

@app.route("/search2")
def search2():
    return render_template("search2.html")

if __name__ == '__main__':
    app.run(port = 5000, debug=True)






""" def get_data():
    connection_string = "postgres://postgres:Ciara1504@localhost/vaccines"
    # with create_engine(connection_string) as conn:
    conn=create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)
    return data

@app.route("/api_country")
def api_country():
    
    connection_string = "postgres://postgres:postgres@localhost/vaccines"
    conn = create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)

    country = data.groupby("country")["daily_vaccinations"].sum()

    return (
        country
        .reset_index()
        .loc[:,["country","daily_vaccinations"]]
        .sort_values(by="daily_vaccinations", ascending=False)
        .head(15)
        .to_json(orient="records")
    )

@app.route("/api_world")
def api_vaccines():
    connection_string = "postgres://postgres:postgres@localhost/vaccines"
    conn = create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)

    total_world = data.groupby("date")["daily_vaccinations"].sum()

    return (
        total_world
        .reset_index()
        .loc[:,["date","daily_vaccinations"]]
        .sort_values(by="date", ascending=False)
        .to_json(orient="records")
    )

@app.route("/api/country/<country>")
def api_daily(country):
    connection_string = "postgres://postgres:postgres@localhost/vaccines"
    conn = create_engine(connection_string)
    data = pd.read_sql("select * from countries",conn)
    dt = data.query(f'country == "{country}"')
    daily_country=dt[['country','date',"daily_vaccinations"]].groupby(['country']).agg(list)
    

    return(
        daily_country
        .to_json(orient="index")
    )

@app.route("/api/countries")
def countries():
    data = get_data()
    return jsonify(data.country.unique().tolist()) """


""" @app.route("/Graphic1")
def Graphic1():
    return render_template("Graphic1.html")
>>>>>>> e209193b831ba3a36c25b783ef3bea9c9c69142c



@app.route("/Graphic4")
def Graphic4():
    return render_template("Graphic4.html")
 """

@app.route("/search1")
def search1():
    return render_template("search1.html")

@app.route("/search2")
def search2():
    return render_template("search2.html")

@app.route("/form")
def form():
    return render_template("form.html")

<<<<<<< HEAD
if __name__ == '__main__':
    app.run(port = 5000, debug=True)
=======
>>>>>>> e209193b831ba3a36c25b783ef3bea9c9c69142c
