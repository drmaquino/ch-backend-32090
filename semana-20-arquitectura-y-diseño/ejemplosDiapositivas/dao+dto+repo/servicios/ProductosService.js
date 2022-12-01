import Producto from '../modelos/Producto.js'
import Id from '../modelos/Id.js'

export default class ProductoService {
    #repo
    constructor(repo) {
        this.#repo = repo
    }

    async crearUno(datosProducto) {
        const id = Id.new()
        const producto = new Producto({ id, ...datosProducto })
        return await this.#repo.save(producto)
    }

    async modificarPrecio(idProducto, nuevoPrecio) {
        const producto = await this.#repo.getById(idProducto)
        producto.precio = nuevoPrecio
        return await this.#repo.save(producto)
    }

    async borrarUno(idProducto) {
        return await this.#repo.removeById(idProducto)
    }

    async obtenerUno(idProducto) {
        return await this.#repo.getById(idProducto)
    }

    async obtenerTodos() {
        return await this.#repo.getAll()
    }
}
