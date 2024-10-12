'use strict'

var application = require('./application');
var mongoose = require('mongoose');

const Usuario = require('./models/usuarios');
const bcrypt = require("bcryptjs");

mongoose.connect(
    "mongodb://127.0.0.1:27017/tiendavirtual")
    .then(
        () => {
            console.log("Conexion exitosa");
            application.listen(9898, function(){

                checkUserRoles("administrador", "distribuidor");

                console.log("Aplicacion inciada");
            });
        },
        err => {
            console.log("Conexion con BBDD fallida.");
        }
    );

function checkUserRoles(...roles) {
    const salt = bcrypt.genSaltSync(10);
    roles.forEach(role => {
        Usuario.findOne({rol: role}).then(query => {
            if (!query) {
                console.log("Creando un usuario para "+role);
                const newUser = new Usuario({
                    username: role,
                    password: bcrypt.hashSync("123", salt),
                    rol: role,
                }).save();
            }
        });

    });
}