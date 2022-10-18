import { MODO } from './config.js'

class ContenedorMemoria {
    obtener = () => 'esto viene de memoria'
}
class ContenedorMongoDb {
    obtener = () => 'esto viene de mongodb'
}

let persistencia

switch (MODO) {
    case 'mongodb':
        persistencia = new ContenedorMongoDb()
        break
    default:
        persistencia = new ContenedorMemoria()
}

export default persistencia