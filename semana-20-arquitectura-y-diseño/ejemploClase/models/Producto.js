import { EnteroPositivo } from './shared/EnteroPositivo.js';

export class Producto {
    #codigo;
    #precio;
    #stock;

    constructor({ codigo, precio, stock }) {
        this.#setCodigo(codigo);
        this.precio = precio;
        this.#setStock(stock);
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

    set precio(valor) {
        const precioValidado = new EnteroPositivo(valor, 'precio')
        this.#precio = precioValidado.valor;
    }

    #setStock(valor) {
        const stockValido = new EnteroPositivo(valor, 'stock')
        this.#stock = stockValido.valor;
    }

    vender(cantidad) {
        const cantidadVendida = new EnteroPositivo(cantidad, 'cantidad')
        if (this.#stock < cantidadVendida.valor) {
            throw new Error('ajuste de stock invalido')
        }
        this.#stock -= cantidadVendida.valor
    }

    reponer(cantidad) {
        const cantidadAReponer = new EnteroPositivo(cantidad, 'cantidad')
        this.#stock += cantidadAReponer.valor
    }

    get precio() { return this.#precio; }
    get codigo() { return this.#codigo; }
    get stock() { return this.#stock; }

    datos() {
        return Object.freeze({
            codigo: this.#codigo,
            precio: this.#precio,
            stock: this.#stock,
        });
    }
}

