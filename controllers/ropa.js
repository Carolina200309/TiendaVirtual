'use strict';


const Ropa = require('../models/ropa'); 

function crearRopa(req, res) {
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

module.exports = {
    crearRopa,
};