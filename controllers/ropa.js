'use strict';


const Ropa = require('../models/ropa'); 

function crearRopa(req, res) {

    var usuarioId = req.userId;  
    var usuarioRol = req.userRol;

    console.log("Rol del usuario: ", usuarioRol);

    // Verificar si el usuario tiene rol de administrador
    if (usuarioRol === 'administrador') 
        {

        var ropaRecibida = req.body;

        var nuevaRopa = new Ropa({
            tipoRopa: ropaRecibida.tipoRopa,
            nombre: ropaRecibida.nombre,
            color: ropaRecibida.color,
            precio: ropaRecibida.precio,
            talla: ropaRecibida.talla,
            material: ropaRecibida.material
        });

        nuevaRopa.save().then(
            (ropaGuardada) => {
                res.status(200).send({ ropaCreada: ropaGuardada });
            },
            (err) => {
                res.status(500).send({
                    message: 'No se pudo crear, intente nuevamente',
                    error: err
                });
            }
        );
    }
    else {
    // Si el usuario no es administrador, devolver un error
    res.status(403).send({
        message: 'No está autorizado para crear ropa nueva.'
    });
}
}

function consultarRopa(req,resp){
    Ropa.find({}).then(
        (ropa)=>{
            resp.status(200).send({ropa: ropa });
        },
        (err) => {
            resp.status(500).send({
                message: 'No se pudo obtener la ropa. Intente nuevamente.'
            });
        }
    );
}

module.exports = {
    crearRopa,
    consultarRopa
};