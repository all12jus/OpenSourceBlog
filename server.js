var express = require('express');
var http = require('http');

var port = process.env.PORT || 8081;

var bodyParser = require('body-parser');
var morgan = require('morgan');

var jwt = require('jsonwebtoken');

var app = express();

var mongoose = require('mongoose');
mongoose.connect(require('./config').database);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

app.use(express.static('public'));

app.get('/api/posts', require('./server_side/blog').getAll);
app.post('/api/posts', require('./server_side/blog').postOne);
app.get('/api/posts/:id', require('./server_side/blog').getByID);

var server = http.createServer(app);
server.listen(port);
console.log("Listening on port " + port + "...");
