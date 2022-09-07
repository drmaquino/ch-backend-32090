const estudiantes = [];

function agregarEstudiante(estudiante) {
    estudiantes.push(estudiante)
}

function recuperarEstudiante(dni) {
    const buscado = estudiantes.find(e => e.dni === dni)
    return buscado
}

function recuperarEstudiantes() {
    return estudiantes
}

// const fs = require('fs')

// async function agregarEstudiante(estudiante) {
//     const estudiantesJson = await fs.promises.readFile('./estudiantes.json')
//     const estudiantes = JSON.parse(estudiantesJson)
//     estudiantes.push(estudiante)

// }

module.exports = {
    agregarEstudiante,
    recuperarEstudiante,
    recuperarEstudiantes
} 
