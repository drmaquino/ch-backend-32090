// CAPA DE NEGOCIOS ==================================

class Kiosko {
    #listadoDeProductos
    #registroDeVentas

    constructor({ listadoDeProductos, registroDeVentas }) {
        this.#listadoDeProductos = listadoDeProductos
        this.#registroDeVentas = registroDeVentas
    }

    vender({ idProducto, cantidad }) {
        const producto = this.#listadoDeProductos.buscarPorId(idProducto)
        if (!producto) throw new Error('el producto no existe')
        if (producto.stock < cantidad) throw new Error('no hay suficiente stock')
        producto.stock = producto.stock - cantidad
        const venta = new Venta({
            codigo: idProducto,
            cantidad,
            monto: producto.precio * cantidad,
            fecha: Date.now()
        })
        this.#registroDeVentas.guardar(venta)
        return venta.datos()
    }

    obtenerVentas() {
        return this.#registroDeVentas.obtenerTodas().map(p => p.datos())
    }
}

class Venta {
    #codigo
    #cantidad
    #monto
    #fecha

    constructor({ codigo, cantidad, monto, fecha }) {
        this.codigo = codigo
        this.cantidad = cantidad
        this.monto = monto
        this.fecha = fecha
    }

    set codigo(valor) {
        if (!valor) throw new Error('"codigo" es un campo requerido')
        if (typeof valor !== 'string') throw new Error('el codigo debe estar formado por caracteres')
        if (valor.length < 10) throw new Error('el codigo debe tener al menos 10 caracteres')
        this.#codigo = valor
    }

    get codigo() { return this.#codigo }

    set cantidad(valor) {
        if (!valor) throw new Error('"cantidad" es un campo requerido')
        if (isNaN(valor)) throw new Error('debe ser numerico')
        if (valor <= 0) throw new Error('debe ser mayor a cero')
        this.#cantidad = valor
    }

    get cantidad() { return this.#cantidad }

    set monto(valor) {
        if (!valor) throw new Error('"monto" es un campo requerido')
        if (isNaN(valor)) throw new Error('debe ser numerico')
        if (valor <= 0) throw new Error('debe ser mayor a cero')
        this.#monto = valor
    }

    get monto() { return this.#monto }

    set fecha(valor) {
        if (!valor) throw new Error('"fecha" es un campo requerido')
        this.#fecha = valor
    }

    get fecha() { return this.#fecha }

    datos() {
        return Object.freeze({
            codigo: this.#codigo,
            cantidad: this.#cantidad,
            monto: this.#monto,
            fecha: this.#fecha,
        })
    }
}

class Producto {
    #codigo
    #precio
    #stock

    constructor({ codigo, precio, stock }) {
        this.codigo = codigo
        this.precio = precio
        this.stock = stock
    }

    set codigo(valor) {
        if (!valor) throw new Error('"codigo" es un campo requerido')
        if (typeof valor !== 'string') throw new Error('el codigo debe estar formado por caracteres')
        if (valor.length < 10) throw new Error('el codigo debe tener al menos 10 caracteres')
        this.#codigo = valor
    }

    get codigo() { return this.#codigo }

    set precio(valor) {
        if (!valor) throw new Error('el precio es un campo requerido')
        if (isNaN(valor)) throw new Error('el precio debe ser numerico')
        if (valor <= 0) throw new Error('el precio debe ser mayor a cero')
        this.#precio = valor
    }

    get precio() { return this.#precio }

    set stock(valor) {
        if (!valor) throw new Error('el precio es un campo requerido')
        if (isNaN(valor)) throw new Error('el precio debe ser numerico')
        if (valor <= 0) throw new Error('el precio debe ser mayor a cero')
        this.#stock = valor
    }

    get stock() { return this.#stock }

    datos() {
        return Object.freeze({
            codigo: this.#codigo,
            precio: this.#precio,
            stock: this.#stock,
        })
    }
}

// CAPA DE PERSISTENCIA =================================

class ListadoDeProductos {
    #productos

    constructor() {
        this.#productos = []
    }

    buscarPorId(idProducto) {
        return this.#productos.find(p => p.codigo === idProducto)
    }

    cargar(producto) {
        this.#productos.push(producto)
    }
}

class RegistroDeVentas {
    #ventas

    constructor() {
        this.#ventas = []
    }

    guardar(venta) {
        this.#ventas.push(venta)
    }

    obtenerTodas() {
        return this.#ventas
    }
}

// CAPA DE RUTEO ======================================================

// controller.js

const listadoDeProductos = new ListadoDeProductos()
const registroDeVentas = new RegistroDeVentas()

const kiosko = new Kiosko({
    listadoDeProductos,
    registroDeVentas
})

/* datos de prueba!! */
const p = new Producto({
    codigo: "abcde12345",
    precio: 2,
    stock: 10,
})
listadoDeProductos.cargar(p)

/* ------------ */

function postVentasController(req, res) {
    try {
        const datosVenta = req.body
        const venta = kiosko.vender(datosVenta)
        res.status(201).json(venta)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//============================
// server.js

import express from 'express'

const app = express()
app.use(express.json())

app.post('/api/ventas', postVentasController)

app.listen(8080, () => {
    console.log('escuchando en 8080')
})


// ejemplo del negocio  =============================================

// const listadoDeProductos = new ListadoDeProductos()
// const registroDeVentas = new RegistroDeVentas()

// const kiosko = new Kiosko({
//     listadoDeProductos,
//     registroDeVentas
// })

// const p = new Producto({
//     codigo: "abcde12345",
//     precio: 2,
//     stock: 10,
// })

// listadoDeProductos.cargar(p)

// kiosko.vender({ idProducto: 'abcde12345', cantidad: 4 })
// console.log(kiosko.obtenerVentas())

