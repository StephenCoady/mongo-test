var MongoClient = require('mongodb').MongoClient;
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/test', function(req, res) {
  var myCollection;
  var db = MongoClient.connect('mongodb://mongodb-1:27017', function(err, db) {
    if (err)
      throw err;
    console.log("connected to the mongoDB !");
    myCollection = db.collection('test_collection');
  });
});

var runtimeTimer = Date.now() / 1000;
var startTime = new Date();
app.get('/', function(req, res) {
  res.send('Application started: '+ startTime +' and is running for '+ (Date.now() / 1000 - runtimeTimer) +' seconds.<br><a href="./test">/test endpoint</a>');

});

var port = process.env.FH_PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
var host = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(port, host, function() {
  console.log('App started at: ' + new Date() + ' on port: ' + port);
});