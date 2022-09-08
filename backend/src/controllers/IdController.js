"use strict";
// const db = require('../database/DbConnection');

module.exports = {
  prestador(req, res) {
    console.log(req.body.id);
    res.json("Recebido");
  }
}