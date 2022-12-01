import { Kiosko } from "../models/Kiosko.js";
import listadoDeProductos from "../databases/listadoDeProductos.js";
import registroDeVentas from "../databases/registroDeVentas.js";

const kiosko = new Kiosko({
    listadoDeProductos,
    registroDeVentas
});

/* datos de prueba!! */
import { Producto } from "../models/Producto.js";

const p = new Producto({
    codigo: "abcde12345",
    precio: 2,
    stock: 10,
});
listadoDeProductos.cargar(p);
/* ------------ */

export async function postVentasController(req, res) {
    try {
        const datosVenta = req.body;
        const venta = await kiosko.vender(datosVenta);
        res.status(201).json(venta);
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export async function getAllVentasController(req, res) {
    try {
        const ventas = await kiosko.obtenerVentas();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
