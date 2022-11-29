import { ListadoDeProductos } from '../models/ListadoDeProductos.js';
import { DaoProductosEnMemoria } from './memoria/DaoProductosEnMemoria.js';

const dao = new DaoProductosEnMemoria()

export default new ListadoDeProductos(dao)