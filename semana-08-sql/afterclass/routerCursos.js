const express = require('express');
const { crearId } = require("./crearId.js");
const { recuperarEstudiante } = require('./logicaEstudiantes.js');

const routerCursos = express.Router();

const cursos = [];

routerCursos.post('/', (req, res) => {
    const datosCurso = req.body;
    if (!datosCurso.nombre) {
        return res.status(400).json({ msg: 'el campo nombre es obligatorio' });
    }
    const curso = {
        id: crearId(),
        nombre: datosCurso.nombre,
        estudiantes: []
    };
    cursos.push(curso);
    res.status(201).json(curso);
});

routerCursos.post('/:idCurso/estudiantes', (req, res) => {
    const idCurso = req.params.idCurso
    const dniEstudiante = req.body.dni
    const curso = cursos.find(c => c.id === idCurso)

    if (!curso) {
        return res.status(400).json({ msg: `el curso con id '${idCurso}' no existe` })
    }

    const estudiante = recuperarEstudiante(dniEstudiante)

    if (!estudiante) {
        return res.status(400).json({ msg: `el estudiante con dni '${dniEstudiante}' no existe` })
    }

    curso.estudiantes.push(estudiante)

    res.json({ msg: 'ok' })
})

routerCursos.get('/:idCurso', (req, res) => {
    const idCurso = req.params.idCurso
    const curso = cursos.find(c => c.id === idCurso)
    if (!curso) {
        return res.status(404).json({ msg: `el curso con id '${idCurso}' no existe` })
    }
    res.json(curso)
})

exports.routerCursos = routerCursos;