import express from 'express'

import { PORT } from './config.js'

import persistencia from './persistencia.js'

// console.log(PORT)

const app = express()

app.get('/', (req, res) => {
    res.send(persistencia.obtener())
})

const server = app.listen(PORT, () => { console.log(`escuchando en ${server.address().port}`) })

// http.createServer(PORT)

// env = environment
// console.log(process.env)

// console.log(process.argv)
