import express from 'express';
import { auth } from './auth.js';
import { codificar } from "./jwt.js";

/******************  DATABASE  ******************/

const usuarios = []

/******************  SERVER  ******************/

const app = express()

/******************  MIDDLEWARES  ******************/

app.use(express.json())

/******************  ROUTES  ******************/

const authRouter = express.Router()
const datosRouter = express.Router()

authRouter.post('/register', postRegister)
authRouter.post('/login', postLogin)
datosRouter.get('/datos', auth, getDatos)

app.use('/auth', authRouter)
app.use('/datos', datosRouter)

//===============================

// controllers

async function postRegister(req, res) {

  const { nombre, password, direccion } = req.body

  const yaExiste = usuarios.find(usuario => usuario.nombre == nombre)
  if (yaExiste) {
    return res.status(409).json({ error: 'ya existe ese usuario' });
  }

  const usuario = { nombre, password, direccion }

  usuarios.push(usuario)

  const access_token = await codificar(usuario)

  res.json({ access_token })
}

async function postLogin(req, res) {

  const { nombre, password } = req.body

  const usuario = usuarios.find(usuario => usuario.nombre == nombre && usuario.password == password)
  if (!usuario) {
    return res.status(401).json({ error: 'credenciales invalidas' });
  }

  const access_token = await codificar(usuario)

  res.json({ access_token })
}

function getDatos(req, res) {
  res.json(req.user)
}

/******************  LISTEN  ******************/

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))
