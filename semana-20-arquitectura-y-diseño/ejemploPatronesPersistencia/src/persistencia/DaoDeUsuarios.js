import ContendorArchivo from './contenedores/ContenedorArchivo.js'
import ContendorMemoria from './contenedores/ContenedorMemoria.js'

const modoPers = 'archivo' // config.PERS pero aun no hice el archivo config

let daoDeUsuarios

switch (modoPers) {
    case 'archivo':
        daoDeUsuarios = new ContendorArchivo('./DB/usuarios.txt')
        break
    default:
        daoDeUsuarios = new ContendorMemoria()
}

export default daoDeUsuarios