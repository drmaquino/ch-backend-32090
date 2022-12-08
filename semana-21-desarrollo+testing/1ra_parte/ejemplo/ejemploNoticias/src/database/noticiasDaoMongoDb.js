import DaoMongoDb from './mongodb/DaoMongoDb.js';

export default class NoticiasDaoMongoDB extends DaoMongoDb {

    constructor(db) {
        super(db, 'noticias')
    }

    async obtenerTodas() {
        return await super.obtenerTodas()
    }

    async obtenerPorId(id) {
        return await super.obtenerPorId(id)
    }

    async guardar(noticiaDto) {
        await super.guardar(noticiaDto)
    }

    async actualizarPorId(id, noticiaDto) {
        return await this.actualizarPorId(id, noticiaDto)
    }

    async borrarPorId(id) {
        return await super.borrarPorId(id)
    }
}
