import express from 'express'

// cliente envia un formulario

// formulario con campos -> envia un post -> se codifica y se envia a traves de la url

// [POST] http://localhost:8080/api/productos?nombre=mesa&precio=15000&color=verde

import path from 'path'
import fs from 'fs'

const app = express()

// app.use(async (req, res, next) => {
//     try {
//         await fs.promises.open(path.join('./public', req.path))
//         res.sendFile(req.path, { root: './public' })
//     } catch (error) {
//         next()
//     }
// })

app.use(express.static('public'))

// // app.use((req, res, next) => {
// //     // if (hay info de un formulario embebida en la url)
// //     //     la extraigo, la parseo, y la guardo en req.body

// //     // ejemplo:
// //     const ruta = req.url
// //     if (ruta.indexOf('?') !== -1) {
// //         const body = {}
// //         const opciones = ruta.split('?')[1]
// //         //nombre=mesa&precio=15000&color=verde
// //         opciones.split('&').forEach(pcv => {
// //             const [k, v] = pcv.split('=')
// //             body[k] = v
// //         })
// //         req.body = body
// //     }

// //     next()
// // })

app.use(express.urlencoded({ extended: true }))

// // app.use((req, res, next) => {
// //     // if (hay cookies)
// //     //     leerlas, parsearlas, y guardarlas en un objeto
// //     //     en el campo req.cookies
// //     // next()
// // })

// app.use(cookieParser())

// // app.use(session())

// // app.use(passport.initialize())
// // app.use(passport.session())

// app.use((req, res, next) => {
//     // ejemplo: autenticacion
//     // if (todo bien)
//     // next()
//     // else
//     // res.sendStatus(401)
// })

app.get('/productos', (req, res, next) => {
    res.json(['producto'])
})

// app.use(async (req, res, next) => {
//     try {
//         const prod = req.body
//         const result = await logicaDeNegocio.guardarProd(prod)
//         res.json(result)
//     } catch (error) {
//         next(error)
//     }
// })

// app.use((err, req, res, next) => {
//     switch (err.tipo) {
//         case 'NOT_FOUND':
//             res.status(404)
//             break
//         default:
//             res.status(500)
//     }
//     res.json({ mensajeError: err.message })
// })


app.listen(8080)

