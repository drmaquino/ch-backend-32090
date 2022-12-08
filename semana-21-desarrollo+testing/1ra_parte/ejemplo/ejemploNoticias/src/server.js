import express from 'express'
import cors from 'cors'
import noticiasRouter from './routers/index.js';
import { errorHandler } from './middlewares/errorHandling.js';

export const app = express()

app.use(cors())

app.use(express.static('public'))
app.use(express.json())

app.use('/api/noticias', noticiasRouter)
app.use(errorHandler)


