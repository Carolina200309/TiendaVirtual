'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ropaSchema = Schema({
    tipoRopa: String,
    nombre: String,
    color: String,
    precio: Number,
    talla: String,
    material: String
});

module.exports = mongoose.model('Ropa', ropaSchema);