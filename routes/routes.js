'use strict';

var express = require('express');
var ropaController = require('../controllers/ropa');
var routes = express.Router();


routes.post('/api/ropa', ropaController.crearRopa);

module.exports = routes;
