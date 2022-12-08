import Noticia from '../models/Noticia.js'
import Id from '../models/Id.js'

export default class NoticiasApi {
    #noticiasRepository

    constructor(noticiasRepository) {
        this.#noticiasRepository = noticiasRepository
    }

    async obtenerNoticias(id) {
        if (id) {
            const noticia = await this.#noticiasRepository.obtenerPorId(id)
            return noticia.asDto()
        } else {
            const noticias = await this.#noticiasRepository.obtenerTodas()
            return noticias.map(n => n.asDto())
        }
    }

    async guardarNoticia(datosNoticia) {
        const id = Id.crearId()
        const noticia = new Noticia({ id, ...datosNoticia })
        await this.#noticiasRepository.guardar(noticia)
        return noticia.asDto()
    }

    async actualizarNoticia(id, datosNoticia) {
        const noticia = new Noticia(datosNoticia)
        await this.#noticiasRepository.actualizarPorId(id, noticia)
        return noticia.asDto()
    }

    async borrarNoticia(id) {
        return await this.#noticiasRepository.borrarPorId(id)
    }
}
