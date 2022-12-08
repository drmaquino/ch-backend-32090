import Noticia from '../models/Noticia.js'

export default class NoticiasRepository {
    #noticiasDao

    constructor(noticiasDao) {
        this.#noticiasDao = noticiasDao
    }

    async obtenerTodas() {
        const dtos = await this.#noticiasDao.obtenerTodas()
        return dtos.map(dto => new Noticia(dto))
    }

    async obtenerPorId(id) {
        const dto = await this.#noticiasDao.obtenerPorId(id)
        return new Noticia(dto)
    }

    async guardar(noticia) {
        await this.#noticiasDao.guardar(noticia.asDto())
    }

    async actualizarPorId(id, noticia) {
        await this.#noticiasDao.actualizarPorId(id, noticia.asDto())
    }

    async borrarPorId(id) {
        return await this.#noticiasDao.borrarPorId(id)
    }
}