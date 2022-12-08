export function errorHandler(err, req, res, next) {
    switch (err.message) {
        case 'NOT_FOUND':
            res.status(404)
            break
        case 'MISSING_REQUIRED_PARAM':
            res.status(400)
            break
        default:
            res.status(500)
    }
    res.json({ msg: err.message })
}