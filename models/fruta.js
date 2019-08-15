'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let FrutaSchema = Schema({
  nombre: String,
  color: String,
  temporada: Boolean
});

module.exports = mongoose.model('Fruta', FrutaSchema);