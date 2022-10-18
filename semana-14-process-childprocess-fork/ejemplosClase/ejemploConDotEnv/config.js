import dotenv from 'dotenv'

dotenv.config({
    path: process.env.NODE_ENV === 'production' ? 'produccion.env' : 'desarrollo.env'
})

export const PORT = process.env.PORT ?? 8080

export const PERSISTENCIA = process.env.PERSISTENCIA

// console.log(config)

