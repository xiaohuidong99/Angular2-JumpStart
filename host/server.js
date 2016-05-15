#!/usr/bin/env node
livereload = require('express-livereload');
var debug = require('debug')('express-example');
var express = require('express');
models = require("./models");
var app = express();
var users = require('./routes/users');

livereload(app, config={})
models.sequelize.sync().then(function () {
  // Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
  app.use('/users', users);


  app.listen(3000);
  console.log('Listening on port 3000...');

});
