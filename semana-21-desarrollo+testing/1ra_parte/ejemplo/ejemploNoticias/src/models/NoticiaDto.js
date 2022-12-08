export default class NoticiaDto {
    constructor({ id, titulo, cuerpo, autor, imagen, email, vista }) {
        this.id = id
        this.titulo = titulo
        this.cuerpo = cuerpo
        this.autor = autor
        this.imagen = imagen
        this.email = email
        this.vista = vista
        return Object.freeze(this)
    }

    unfrozen() {
        return { ...this }
    }
}
