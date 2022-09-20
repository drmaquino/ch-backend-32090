import knex from 'knex';

export class ContenedorMysql {
    constructor(nombreColeccion) {
        this.elementos = knex.connect();
    }

    obtenerTodas() {
        return this.elementos.select('sfdfsd').form();
    }
}
