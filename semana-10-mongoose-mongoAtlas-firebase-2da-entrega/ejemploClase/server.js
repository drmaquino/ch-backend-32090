import express from 'express'
import { apiRouter } from './apiRouter.js'

export const app = express()

app.use('/api/personas', apiRouter)
