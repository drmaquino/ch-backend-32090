import { Venta } from './Venta.js';

export class RegistroDeVentas {
    #dao

    constructor(dao) {
        this.#dao = dao
    }

    async listar() {
        const datosVentas = await this.#dao.buscarTodos();
        const ventas = datosVentas.map(p => new Venta(p))
        return ventas
    }

    async anotar(venta) {
        const datosVenta = venta.datos()
        await this.#dao.insertarUno(datosVenta);
    }
}
