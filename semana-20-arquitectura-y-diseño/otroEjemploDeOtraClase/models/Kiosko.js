import { Venta } from './Venta.js';

export class Kiosko {
    #listadoDeProductos;
    #registroDeVentas;

    constructor({ listadoDeProductos, registroDeVentas }) {
        this.#listadoDeProductos = listadoDeProductos;
        this.#registroDeVentas = registroDeVentas;
    }

    async vender({ idProducto, cantidad }) {
        const producto = await this.#listadoDeProductos.buscarPorId(idProducto);
        if (!producto) throw new Error('el producto no existe');

        producto.vender(cantidad)
        await this.#listadoDeProductos.guardarCambios(producto)

        const venta = new Venta({
            codigo: idProducto,
            cantidad,
            precioUnitario: producto.precio,
            fecha: Date.now()
        });
        await this.#registroDeVentas.anotar(venta);
        const ventaDto = venta.datos();
        return ventaDto;
    }

    async obtenerVentas() {
        const ventas = await this.#registroDeVentas.listar();
        return ventas.map(p => p.datos());
    }
}
