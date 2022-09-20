// import { Contenedor } from './Contenedor.js';
// export const contenedorPersonas = new Contenedor()

//===============================================

import mongoose from 'mongoose';
import { CNX_STR } from '../config.js';
import { ContenedorMongoDb } from './ContenedorMongoDb.js'

await mongoose.connect(CNX_STR)

export const contenedorPersonas = new ContenedorMongoDb('personas', {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
})

//===============================================

// import { ContenedorFirestore } from './ContenedorFirestore.js';
// export const contenedorPersonas = new ContenedorFirestore('personas')