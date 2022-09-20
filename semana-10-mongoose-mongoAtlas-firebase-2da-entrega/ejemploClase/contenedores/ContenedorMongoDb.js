import mongoose from 'mongoose';

export class ContenedorMongoDb {
    constructor(nombreColeccion, esquema) {
        this.elementos = mongoose.model(nombreColeccion, mongoose.Schema(esquema));
    }

    obtenerTodas() {
        return this.elementos.find().lean();
    }
}
