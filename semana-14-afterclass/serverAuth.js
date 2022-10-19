import express from 'express'
import session from 'express-session'

const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username !== 'pepe' || password !== 'pepepass') {
    return res.send('login failed')
  }

  req.session.user = username
  req.session.admin = true
  res.send('login success!')
})

app.get('/privado', auth, (req, res) => {
  res.send('si estas viendo esto es porque ya te logueaste!')
})

function auth(req, res, next) {
  if (req.session?.user === 'pepe' && req.session?.admin) {
    return next()
  }
  return res.status(401).send('error de autorización!')
}

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.json({ status: 'Logout ERROR', body: err })
    } else {
      res.send('Logout ok!')
    }
  })
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})
