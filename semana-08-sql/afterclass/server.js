const express = require('express')

const { routerCursos } = require("./routerCursos.js")
const { routerEstudiantes } = require("./routerEstudiantes.js")

const app = express()
app.use(express.json())

app.use('/api/estudiantes', routerEstudiantes)
app.use('/api/cursos', routerCursos)

const server = app.listen(8080, () => {
    console.log(`conectado al puerto ${server.address().port}`)
})