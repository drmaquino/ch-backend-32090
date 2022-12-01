import Usuario from './Usuario.js'

export default class RepositorioDeUsuarios {
    constructor(dao) {
        this.dao = dao
    }

    // espera recibir una instancia de la clase Usuario
    async guardar(usuario) {
        await this.dao.guardar(usuario.asDto())
    }

    // devuelve un array de instancias de Usuario
    async recuperar() {
        const dtos = await this.dao.recuperar()
        return dtos.map(dto => new Usuario(dto))
    }
}