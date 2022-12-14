import mongoose from 'mongoose'

const host = 'localhost'
const port = '27017'

const username = 'root'
const password = 'mongopassword'

const database = 'coderhouse'

const uri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=admin`;

await mongoose.connect(uri)

const personaSchema = new mongoose.Schema({
    id: { type: String, required: true },
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
});

//----------------------------------------------------

function nuevoId() {
    return `${Date.now()}`
}

//----------------------------------------------------

// const dbPersonas = mongoose.model('personas', personaSchema)

// await dbPersonas.deleteMany({})

// // await dbPersonas.create({ nombre: 'michael', anios: 30 })
// await dbPersonas.create({ id: nuevoId(), nombre: 'jose', edad: 30 })

// const personas = await dbPersonas.find()

// console.log(personas)

//----------------------------------------------------

const Persona = mongoose.model('personas', personaSchema)

const persona = new Persona({ id: nuevoId(), nombre: 'aristoteles', edad: 30 })
await persona.save()

const personas = await Persona.find().select({ _id: 0, __v: 0 })//.lean()
console.log(personas)

persona.nombre = 'cachito'

await persona.save()

const personas2 = await Persona.find().select({ _id: 0, __v: 0 }).lean()

console.log(personas2)

mongoose.disconnect()