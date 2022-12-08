import { TIPO_PERSISTENCIA } from '../config.js';

import NoticiasDaoMem from './noticiasDaoMem.js'
import NoticiasDaoMongoDb from './noticiasDaoMongoDb.js'

let noticiasDao

switch (TIPO_PERSISTENCIA) {
    case 'MEM':
        noticiasDao = new NoticiasDaoMem()
        break
    case 'MONGO':
        const { db } = await import('./mongodb/mongoClient.js')
        noticiasDao = new NoticiasDaoMongoDb(db)
        break
    default:
        noticiasDao = new NoticiasDaoMem()
}

export default noticiasDao