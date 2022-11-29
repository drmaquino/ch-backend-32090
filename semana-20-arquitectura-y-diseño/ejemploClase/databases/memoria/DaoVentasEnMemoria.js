export class DaoVentasEnMemoria {
    #ventas;

    constructor() {
        this.#ventas = [];
    }

    insertarUno(venta) {
        this.#ventas.push(venta);
    }

    buscarTodos() {
        return this.#ventas;
    }
}
