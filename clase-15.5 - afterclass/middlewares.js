const esAdmin = false

function soloAdmins(req, res, next) {
    if (!esAdmin) {
        res.json({ msg: 'no tiene permiso para hacer esto' })
    } else {
        next()
    }
}

module.exports = { soloAdmins }