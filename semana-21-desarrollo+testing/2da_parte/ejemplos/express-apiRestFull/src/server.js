import express from 'express'

import routerUsuarios from './rutas/usuarios.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api/usuarios', routerUsuarios)

export default app
