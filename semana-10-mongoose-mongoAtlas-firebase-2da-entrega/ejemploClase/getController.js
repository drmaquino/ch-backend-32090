import { contenedorPersonas } from './contenedores/index.js';

export async function getController(req, res) {
    const personas = await contenedorPersonas.obtenerTodas();
    res.json(personas);
}
