import { PERSISTENCIA } from './config.js'

class ContenedorMemoria {
    obtener = () => 'esto viene de memoria'
}
class ContenedorMongoDb {
    obtener = () => 'esto viene de mongodb'
}

let persistencia

switch (PERSISTENCIA) {
    case 'mongodb':
        persistencia = new ContenedorMongoDb()
        break
    default:
        persistencia = new ContenedorMemoria()
}

export default persistencia