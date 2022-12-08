export default class NoticiasController {
    #noticiasApi

    constructor(noticiasApi) {
        this.#noticiasApi = noticiasApi
    }

    getAll = async (req, res, next) => {
        try {
            const noticias = await this.#noticiasApi.obtenerNoticias(req.params.id)
            res.json(noticias)
        } catch (error) {
            next(error)
        }
    }

    post = async (req, res, next) => {
        try {
            const noticiaGuardada = await this.#noticiasApi.guardarNoticia(req.body)
            res.status(201).json(noticiaGuardada)
        } catch (error) {
            next(error)
        }
    }

    put = async (req, res, next) => {
        try {
            const noticiaActualizada = await this.#noticiasApi.actualizarNoticia(req.params.id, req.body)
            res.json(noticiaActualizada)
        } catch (error) {
            next(error)
        }
    }

    delete = async (req, res, next) => {
        try {
            const noticiaBorrada = await this.#noticiasApi.borrarNoticia(req.params.id)
            res.json(noticiaBorrada)
        } catch (error) {
            next(error)
        }
    }
}
