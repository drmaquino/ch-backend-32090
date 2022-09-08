const express = require('express');
const { agregarEstudiante, recuperarEstudiantes } = require('./logicaEstudiantes.js');
const { soloAdmins } = require('./middlewares.js');

const routerEstudiantes = express.Router();

exports.routerEstudiantes = routerEstudiantes;

routerEstudiantes.post('/', soloAdmins, (req, res) => {
    const datosEstudiante = req.body;
    if (!datosEstudiante.dni) {
        return res.status(400).json({ msg: 'el campo dni es obligatorio' });
    }
    if (!datosEstudiante.nombre) {
        return res.status(400).json({ msg: 'el campo nombre es obligatorio' });
    }

    agregarEstudiante(datosEstudiante)

    res.status(201).json(datosEstudiante);
});

routerEstudiantes.get('/', (req, res) => {
    res.json(recuperarEstudiantes())
})