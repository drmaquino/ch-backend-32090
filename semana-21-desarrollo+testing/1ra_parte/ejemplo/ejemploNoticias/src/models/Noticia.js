import NoticiaDto from './NoticiaDto.js'

export default class Noticia {
    #id
    #titulo
    #cuerpo
    #autor
    #imagen
    #email
    #vista

    constructor({ id, titulo, cuerpo, autor, imagen, email, vista }) {
        this.id = id
        this.titulo = titulo
        this.cuerpo = cuerpo
        this.autor = autor
        this.imagen = imagen
        this.email = email
        this.vista = vista
    }

    set id(value) {
        if (!value) throw new Error('MISSING_REQUIRED_PARAM')
        if (this.#id) throw new Error('ILLEGAL_OPERATION')
        this.#id = value
    }

    set titulo(value) {
        if (!value) throw new Error('MISSING_REQUIRED_PARAM')
        this.#titulo = value
    }

    set cuerpo(value) {
        if (!value) throw new Error('MISSING_REQUIRED_PARAM')
        this.#cuerpo = value
    }

    set autor(value) {
        if (!value) throw new Error('MISSING_REQUIRED_PARAM')
        this.#autor = value
    }

    set imagen(value) {
        if (!value) throw new Error('MISSING_REQUIRED_PARAM')
        this.#imagen = value
    }

    set email(value) {
        if (!value) throw new Error('MISSING_REQUIRED_PARAM')
        this.#email = value
    }

    set vista(value) {
        if (value === null || value === undefined) throw new Error('MISSING_REQUIRED_PARAM')
        this.#vista = value
    }

    get id() { return this.#id }
    get titulo() { return this.#titulo }
    get cuerpo() { return this.#cuerpo }
    get autor() { return this.#autor }
    get imagen() { return this.#imagen }
    get email() { return this.#email }
    get vista() { return this.#vista }

    asDto() {
        return new NoticiaDto({
            id: this.#id,
            titulo: this.#titulo,
            cuerpo: this.#cuerpo,
            autor: this.#autor,
            imagen: this.#imagen,
            email: this.#email,
            vista: this.#vista,
        })
    }
}
