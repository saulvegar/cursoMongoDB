'use strict';
let Fruta = require('../models/fruta');

function pruebas(req, res) {
  res.status(200).send({
    message: 'Esta ruta es de prueba en mi api resful con mongo y node'
  });
}

function saveFruta(req, res) {
  let fruta = new Fruta();

  let params = req.body;

  if(params.nombre) {
    fruta.nombre = params.nombre;
    fruta.color = params.color;
    fruta.temporada = params.temporada;

    fruta.save((err, frutaStored) => {
      if(err) {
        console.log(err)
        res.status(500).send({
          message: 'Error en el servidor'
        });
      } else {
        if (frutaStored) {
          res.status(200).send({
            fruta: frutaStored
          });
        } else {
          res.status(200).send({
            message: 'No se ha guardado la fruta'
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: 'El nombre de la fruta es obligatorio'
    });
  }
}

function getFrutas(req, res) {
  Fruta.find({}).sort({_id: -1}).exec((err, frutas) => {
    if (err) {
      res.status(500).send({
        message: 'Error en el servidor'
      });
    } else {
      if (frutas) {
        res.status(200).send({
          frutas
        });
      } else {
        res.status(404).send({
          message: 'No hay frutas'
        });
      }
    }
  });
}

function getFruta(req, res) {
  let frutaId = req.params.id;

  Fruta.findById(frutaId).exec((err, fruta) => {
    if (err) {
      res.status(500).send({
        message: 'Error en el servidor'
      });
    } else {
      if (fruta) {
        res.status(200).send({
          fruta
        });
      } else {
        res.status(404).send({
          message: 'No existe la fruta'
        });
      }
    }
  })
}

module.exports = {
  pruebas,
  saveFruta,
  getFrutas,
  getFruta
};