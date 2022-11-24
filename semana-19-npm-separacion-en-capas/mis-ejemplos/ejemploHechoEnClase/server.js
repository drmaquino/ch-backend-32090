import express from 'express'
import { negocioAutos } from './negocioAutos'

// capa de ruteo

const app = express()
app.use(express.json())

app.get('/api/datos', (req, res) => {
    const losAutos = negocioAutos.verAutosRegistrados()
    res.json(losAutos)
})

app.post('/api/datos', (req, res) => {
    const datosAuto = req.body
    const autoRegistrado = negocioAutos.registroAuto(datosAuto)
    res.status(201).json(autoRegistrado)
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))