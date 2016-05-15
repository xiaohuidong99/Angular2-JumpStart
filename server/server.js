#!/usr/bin/env node
livereload = require('express-livereload');
var debug = require('debug')('express-example');
var express = require('express');
models = require("./models");
var app = express();
var users = require('./routes/users');

livereload(app, config={});
models.sequelize.sync().then(function () {
  app.use('/users', users);


  app.listen(3000);
  console.log('Listening on port 3000...');

});
