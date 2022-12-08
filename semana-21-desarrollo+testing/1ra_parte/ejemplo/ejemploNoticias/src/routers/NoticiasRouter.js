import { Router } from 'express'

export default class NoticiasRouter {
    #noticiasRouter

    constructor(noticiasController) {
        this.#noticiasRouter = Router()
            .get('/:id?', noticiasController.getAll)
            .post('/', noticiasController.post)
            .put('/:id', noticiasController.put)
            .delete('/:id', noticiasController.delete)
    }

    get() {
        return this.#noticiasRouter
    }
}
