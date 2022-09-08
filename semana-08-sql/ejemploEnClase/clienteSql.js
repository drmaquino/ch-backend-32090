import { knexConfig } from './knexConfig.js'
import crearKnex from 'knex'

export const clienteSql = crearKnex(knexConfig)
