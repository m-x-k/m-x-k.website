---
layout: single
title: Creating a python flask app
date:   2016-10-28 11:00:00 +0000
categories:
  - Python
tags:
  - Python
  - Flask
---

## Creating a Python Flask application

The following is simple tutorial on setting up your first python web application using flask. Flask is a microframework for Python based on Werkzeug, Jinja 2. It is one of the simplest python web frameworks you will find.

### Requirements

* Python 2/3
* Pip:
```sh
curl -LO https://bootstrap.pypa.io/get-pip.py
python get-pip.py
```
* Virtualenvwrapper
```sh
pip install virtualenvwrapper
```

### Setup

To setup your individual python virtual environment and install the flask application dependencies, run the following in your terminal session:
```sh
mkvirtualenv flaskapp
pip install flask
```

### Create the application

In the same terminal session create a file named `app.py` with the following contents:
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "Hello World"

if __name__ in '__main__':
    app.run(debug=True)
```

### Start the app

In the same terminal run:
```sh
python app.py
```

Open up a browser window at: `http://localhost:5000`

## Summary

So we managed to get a basic Python Flask web app up and running in seconds. However this is just a basic setup. The application is not multi threaded at this point. To achieve that you would need spend time looking at WSGI which is beyond this beginner tutorial. Its also worth pointing out that there are no Unit Tests as part of this example and that the application routing is just the vanilla Flask implementation which is self contained within the `app.py` file. Flask has many more advanced features which you should [check out](http://flask.pocoo.org/).
