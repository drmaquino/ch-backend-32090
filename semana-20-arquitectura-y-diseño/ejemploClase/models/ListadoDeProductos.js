import { Producto } from './Producto.js';

export class ListadoDeProductos {
    #dao

    constructor(dao) {
        this.#dao = dao
    }

    buscarPorId(idProducto) {
        const datosProducto = this.#dao.buscarPorId(idProducto);
        const producto = new Producto(datosProducto)
        return producto
    }

    cargar(producto) {
        const datosProd = producto.datos()
        this.#dao.insertarUno(datosProd);
    }

    guardarCambios(producto) {
        const datosProd = producto.datos()
        this.#dao.actualizarUnoSegunCodigo(datosProd);
    }
}
