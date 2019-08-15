'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
let fruta_routes = require('./routes/fruta');

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configurar CORS

// rutas base
app.use('/api', fruta_routes);

module.exports = app;