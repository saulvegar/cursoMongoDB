'use strict';
let express = require('express');
let frutaController = require('../controllers/fruta');

let api = express.Router();

api.get('/pruebas', frutaController.pruebas);
api.post('/fruta', frutaController.saveFruta);
api.get('/frutas', frutaController.getFrutas);
api.get('/fruta/:id', frutaController.getFruta);
api.put('/fruta/:id', frutaController.updateFruta);
api.delete('/fruta/:id', frutaController.deleteFruta);

module.exports = api;