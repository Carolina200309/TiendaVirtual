'use strict';

var express = require('express');
var ropaController = require('../controllers/ropa');
var token = require('../helpers/autenticacion');
const usuarios = require('../models/usuarios');
var authenticationController = require("../controllers/autenticacion");

var routes = express.Router();


routes.post('/api/ropa', token.validarToken, ropaController.crearRopa);

routes.post('/api/usuario', authenticationController.registrarUsuario);

routes.post('/api/login', authenticationController.iniciarSesion);

routes.get('/api/ropa',token.validarToken, ropaController.consultarRopa);

module.exports = routes;
