from flask import Flask,jsonify, request,json
from PyDictionary import PyDictionary

dictionary=PyDictionary()
app = Flask(__name__)

@app.route('/')
def hello_world():
	keyWord=request.args.get('word')
	meaning=  dictionary.meaning(keyWord)
	#print "meaning is #########",meaning
	return json.dumps(meaning)
	
     
