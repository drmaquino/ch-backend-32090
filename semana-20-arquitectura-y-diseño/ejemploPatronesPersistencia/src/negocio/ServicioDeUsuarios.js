import { randomUUID } from 'crypto'
import daoDeUsuarios from '../persistencia/DaoDeUsuarios.js'
import RepositorioDeUsuarios from './RepositorioDeUsuarios.js'
import Usuario from './Usuario.js'

function generarId() {
    return randomUUID()
}

export default class ServicioDeUsuarios {
    constructor() {
        this.repositorioUsuarios = new RepositorioDeUsuarios(daoDeUsuarios)
    }

    async registrarNuevoUsuario(datosUsuario) {
        const usuario = new Usuario({
            id: generarId(),
            ...datosUsuario
        })
        await this.repositorioUsuarios.guardar(usuario)

        return usuario.asDto()
    }

    async obtenerUsuarios() {
        const usuarios = await this.repositorioUsuarios.recuperar()
        return usuarios.map(usu => usu.asDto())
    }

}
