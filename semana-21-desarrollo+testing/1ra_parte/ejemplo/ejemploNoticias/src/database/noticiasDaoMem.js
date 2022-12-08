import NoticiaDto from '../models/NoticiaDto.js'

export default class NoticiasDaoMem {
    #noticias

    constructor() {
        this.#noticias = []
    }

    async obtenerTodas() {
        return this.#noticias.map(n => new NoticiaDto(n))
    }

    async obtenerPorId(id) {
        const buscada = this.#noticias.find(n => n.id === id)
        if (!buscada) throw new Error('NOT_FOUND')
        return new NoticiaDto(buscada)
    }

    async guardar(noticiaDto) {
        this.#noticias.push(noticiaDto)
    }

    async actualizarPorId(id, noticiaDto) {
        const index = this.#noticias.findIndex(n => n.id === id)
        if (index === -1) throw new Error('NOT_FOUND')
        this.#noticias[index] = noticiaDto
        return noticiaDto
    }

    async borrarPorId(id) {
        const index = this.#noticias.findIndex(n => n.id === id)
        if (index === -1) throw new Error('NOT_FOUND')
        const [borrado] = this.#noticias.splice(index, 1)
        return borrado
    }
}
