export class DaoProductosEnMongoDb {
    #productos;

    constructor() {
        this.#productos = [];
    }

    buscarPorId(idProducto) {
        const buscado = this.#productos.find(p => p.codigo === idProducto);
        if (!buscado) throw new Error('producto no encontrado')
        return buscado;
    }

    insertarUno(datosProd) {
        this.#productos.push(datosProd);
    }
}