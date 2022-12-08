import dotenv from 'dotenv'
import path from 'path'

export const NODE_ENV = process.env.NODE_ENV || 'development'

const configToLoad = NODE_ENV === 'production'
  ? { path: path.resolve(process.cwd(), 'production.env') }
  : { path: path.resolve(process.cwd(), 'development.env') }

dotenv.config(configToLoad)

export const HOST = process.env.HOST
export const PORT = process.env.PORT
export const TIPO_PERSISTENCIA = process.env.TIPO_PERSISTENCIA
export const CNX_STR = process.env.CNX_STR ?? ''