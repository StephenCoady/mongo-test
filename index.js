var MongoClient = require('mongodb').MongoClient;

var myCollection;
var db = MongoClient.connect('mongodb://mongodb-1:27017', function(err, db) {
  if (err)
    throw err;
  console.log("connected to the mongoDB !");
  myCollection = db.collection('test_collection');
});