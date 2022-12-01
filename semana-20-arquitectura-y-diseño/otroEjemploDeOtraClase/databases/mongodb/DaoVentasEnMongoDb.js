export class DaoVentasEnMongoDb {
    #ventas;

    constructor() {
        this.#ventas = [];
    }

    insertarUno(venta) {
        //return mongodb.ventas.insertOne(venta)
        this.#ventas.push(venta);
    }

    buscarTodos() {
        // return mongodb.ventas.find({})
        return this.#ventas;
    }
}
