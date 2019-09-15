var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var config = require('./config/config.json');
var port = process.env.PORT || config.portBackend;

app.use(bodyParser.json())
app.use(cors())

//Models
var models = require("./models");
//Routes
var UserRouter = require('./controllers/UserController.js');
app.use('/User', UserRouter);

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})