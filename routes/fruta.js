'use strict';
let express = require('express');
let frutaController = require('../controllers/fruta');

let api = express.Router();

api.get('/pruebas', frutaController.pruebas);
api.post('/fruta', frutaController.saveFruta);
api.get('/frutas', frutaController.getFrutas);
app.get('/fruta/:id', frutaController.getFruta);

module.exports = api;