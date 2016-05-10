var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

// POST method route
app.post('/api/saveIP', function (req, res) {
  res.send('{\"result\":\"OK\"}');
});
