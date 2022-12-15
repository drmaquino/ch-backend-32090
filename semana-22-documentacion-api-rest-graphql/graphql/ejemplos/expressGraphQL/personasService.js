import crypto from 'crypto'

import Persona from './Persona.js'

const personasMap = {}

export function getPersonas(campo, valor) {
    const personas = Object.values(personasMap)
    if (campo && valor) {
        return personas.filter(p => p[campo] == valor)
    } else {
        return personas
    }
}

export function getPersona(id) {
    if (!personasMap[id]) {
        throw new Error('Persona not found.')
    }
    return personasMap[id]
}

export function createPersona(datos) {
    const id = crypto.randomBytes(10).toString('hex')
    const nuevaPersona = new Persona(id, datos)
    personasMap[id] = nuevaPersona.datos()
    return nuevaPersona.datos()
}

export function updatePersona(id, datosNuevos) {
    if (!personasMap[id]) {
        throw new Error('Persona not found')
    }
    const datosAnteriores = personasMap[id]
    const datos = { ...datosAnteriores, ...datosNuevos }
    const personaActualizada = new Persona(id, datos)
    personasMap[id] = personaActualizada.datos()
    return personaActualizada.datos()
}

export function deletePersona(id) {
    if (!personasMap[id]) {
        throw new Error('Persona not found')
    }
    const personaBorrada = personasMap[id]
    delete personasMap[id]
    return personaBorrada
}