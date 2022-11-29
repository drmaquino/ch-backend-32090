export class DaoProductosEnMemoria {
    #productos;

    constructor() {
        this.#productos = [];
    }

    buscarPorId(idProducto) {
        const buscado = this.#productos.find(p => p.codigo === idProducto);
        if (!buscado) throw new Error('producto no encontrado')
        return buscado;
    }

    insertarUno(producto) {
        this.#productos.push(producto);
    }

    actualizarUnoSegunCodigo(producto) {
        const indiceBuscado = this.#productos.findIndex(p => p.codigo === producto.codigo);
        if (indiceBuscado === -1) throw new Error('producto no encontrado')
        this.#productos[indiceBuscado] = producto
    }
}
