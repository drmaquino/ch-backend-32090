import { randomUUID as generarId } from 'crypto';
import { daoAutos } from './daoAutos';

// capa de negocios
function crearAuto({ marca, modelo, patente }) {
    if (!marca)
        throw new Error('la marca debe existir');
    if (!modelo)
        throw new Error('el modelo debe existir');
    if (!patente)
        throw new Error('la patente debe existir');
    return {
        id: generarId(), marca, modelo, patente
    };
}
class NegocioAutos {
    registroAuto(datosDelAuto) {
        const auto = crearAuto(datosDelAuto);
        daoAutos.guardarUnAuto(auto);
        return auto;
    }

    verAutosRegistrados() {
        return daoAutos.recuperarAutos();
    }
}
export const negocioAutos = new NegocioAutos();
