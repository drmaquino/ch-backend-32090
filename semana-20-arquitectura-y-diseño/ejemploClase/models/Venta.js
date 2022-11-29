import { EnteroPositivo } from './shared/EnteroPositivo.js';

export class Venta {
    #codigo;
    #cantidad;
    #precioUnitario;
    #fecha;

    constructor({ codigo, cantidad, precioUnitario, fecha }) {
        this.#setCodigo(codigo);
        this.#setCantidad(cantidad);
        this.#setPrecioUnitario(precioUnitario);
        this.#setFecha(fecha);
    }

    #setCodigo(valor) {
        if (!valor)
            throw new Error('"codigo" es un campo requerido');
        if (typeof valor !== 'string')
            throw new Error('el codigo debe estar formado por caracteres');
        if (valor.length < 10)
            throw new Error('el codigo debe tener al menos 10 caracteres');
        this.#codigo = valor;
    }

    #setCantidad(valor) {
        const cantVendida = new EnteroPositivo(valor, 'cantidad')
        this.#cantidad = cantVendida.valor;
    }


    #setPrecioUnitario(valor) {
        const precioUnitarioValidado = new EnteroPositivo(valor, 'precio unitario')
        this.#precioUnitario = precioUnitarioValidado.valor;
    }


    #setFecha(valor) {
        if (!valor)
            throw new Error('"fecha" es un campo requerido');
        this.#fecha = valor;
    }

    get codigo() { return this.#codigo; }
    get cantidad() { return this.#cantidad; }
    get precioUnitario() { return this.#precioUnitario; }
    get fecha() { return this.#fecha; }

    datos() {
        return Object.freeze({
            codigo: this.#codigo,
            cantidad: this.#cantidad,
            precioUnitario: this.#precioUnitario,
            fecha: this.#fecha,
        });
    }
}
