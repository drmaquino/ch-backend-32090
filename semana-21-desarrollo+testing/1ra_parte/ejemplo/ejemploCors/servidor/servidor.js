import express from 'express'
import cors from 'cors'

const app = express()

// app.use(cors())

//----------------------------

// app.use(
//   cors({
//     origin: 'http://localhost:5000',
//   })
// )

//---------------------------

// const whitelist = ['http://example1.com', 'http://example2.com']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions))

//-------------------------------

// const whitelist = ['http://example1.com', 'http://example2.com']
// const corsOptionsDelegate = function (req, callback) {
//   let corsOptions;
//   if (whitelist.indexOf(req.header('Origin')) !== -1) {
//     corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
//   } else {
//     corsOptions = { origin: false } // disable CORS for this request
//   }
//   callback(null, corsOptions) // callback expects two parameters: error and options
// }

// app.use(cors(corsOptionsDelegate))

//-------------------------------
app.get('/mensaje', (req, res) => {
  res.send('el mensaje para mostrar')
})

app.listen(3000)
