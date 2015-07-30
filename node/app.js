var express = require('express'),
app         = express(),
MongoClient = require('mongodb').MongoClient,
url         = 'mongodb://db:27017/skytest';

app.get('/', function(req, res) {
  res.send('Welcome to the Node APP');
});

MongoClient.connect(url, function(err, db){
  console.log('Connected to DB');

  var col = db.collection('todos');

  col.find({}).toArray(function(err, docs){
    if(docs.length === 0){
      col.insert([
        {text: 'Learn Docker'},
        {text: 'Create docker containers'},
        {text: 'Create docker image'}
      ], function(err, result) {
        console.log("Inserted sample todos");
      });
    }
  });

  // API
  app.get('/api/todos', function(req, res) {
    col.find({}).toArray(function(err, docs){
      res.send(docs);
    });
  });

  app.get('/api/todos/create', function(req, res) {
    col.insert([
      {text: 'Sample ' + new Date().getTime()}
    ], function(err, result) {
      console.log("Inserted todo");
      res.send(result);
    });
  });
});

var server = app.listen(process.env.PORT || 8888, function() {
  var host = server.address().address,
  port     = server.address().port;

  console.log('App started at http://%s:%s', host, port);
});