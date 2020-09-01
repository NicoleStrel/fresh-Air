import time
from flask import Flask

app = Flask(__name__)

# example app

@app.route('/time')
def get_current_time():
    return {'time': time.time()} #creates a json file of the path route /time
