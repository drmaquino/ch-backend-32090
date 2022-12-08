import noticiasApi from '../services/index.js'
import NoticiasController from './noticiasController.js'

const noticiasController = new NoticiasController(noticiasApi)

export default noticiasController