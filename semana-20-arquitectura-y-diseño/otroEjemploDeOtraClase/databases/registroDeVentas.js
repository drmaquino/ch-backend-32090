import { RegistroDeVentas } from '../models/RegistroDeVentas.js';
import { DaoVentasEnMemoria } from './memoria/DaoVentasEnMemoria.js';

const dao = new DaoVentasEnMemoria()

export default new RegistroDeVentas(dao)