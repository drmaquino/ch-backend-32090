import NoticiasRouter from './NoticiasRouter.js'
import noticiasController from '../controllers/index.js'

const noticiasRouter = new NoticiasRouter(noticiasController)

export default noticiasRouter.get()