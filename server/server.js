var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Middleware
app.use(bodyParser.json());

//Routes

const Routes = require('./routes.js');

//Use routes
app.use('/', Routes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
