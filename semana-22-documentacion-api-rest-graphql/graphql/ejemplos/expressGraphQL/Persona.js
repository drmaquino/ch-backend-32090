export default class Persona {
    #id
    #nombre
    #edad
    #direccion

    constructor(id, { nombre, edad, direccion }) {
        this.id = id
        this.nombre = nombre
        this.edad = edad
        this.direccion = direccion
    }

    set id(value) {
        if (!value) throw new Error('el campo id es obligatorio')
        this.#id = value
    }

    set nombre(value) {
        if (!value) throw new Error('el campo nombre es obligatorio')
        this.#nombre = value
    }

    set edad(value) {
        if (!value) throw new Error('el campo edad es obligatorio')
        this.#edad = value
    }

    set direccion(value) {
        if (!value) throw new Error('el campo direccion es obligatorio')
        if (!value.calle) throw new Error('el campo direccion.calle es obligatorio')
        if (!value.numero) throw new Error('el campo direccion.numero es obligatorio')
        this.#direccion = value
    }

    datos() {
        return Object.freeze({
            id: this.#id,
            nombre: this.#nombre,
            edad: this.#edad,
            direccion: this.#direccion
        })
    }
}