import express from 'express'
import { clienteSql } from './clienteSql.js'

const app = express()

app.use(express.json())

app.post('/api/personas', async (req, res) => {
    const { nombre, edad } = req.body
    const persona = await clienteSql.insert({ nombre, edad }).into('personas')
    res.json(persona)
})

app.get('/api/personas', async (req, res) => {
    const personas = await clienteSql.select('*').from('personas')
    res.json(personas)
})

app.get('/api/personas/:id', async (req, res) => {
    const persona = await clienteSql.select('*').from('personas').where({ id: req.params.id }).first()
    res.json(persona)
})

app.put('/api/personas/:id', async (req, res) => {
    const { edad } = req.body
    const persona = await clienteSql.update({ edad }).from('personas').where({ id: req.params.id })
    res.json(persona)
})

app.delete('/api/personas/:id', async (req, res) => {
    const persona = await clienteSql.delete().from('personas').where({ id: req.params.id })
    res.sendStatus(204)
})

app.listen(8080, () => {
    console.log('servidor conectado!')
})

//===============================================

// // insert
// await clienteSql.insert({ nombre: 'marian', edad: 36 }).into('personas')

// // select
// const personas = await clienteSql.select('*').from('personas')
// console.log(personas)


// clienteSql.destroy()