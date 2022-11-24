// capa de persistencia
class DaoAutos {
    constructor() {
        this.autos = [];
    }

    recuperarAutos() {
        return this.autos;
    }

    guardarUnAuto(auto) {
        this.autos.push(auto);
    }
}
export const daoAutos = new DaoAutos();
