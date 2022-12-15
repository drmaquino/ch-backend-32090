import { buildSchema } from 'graphql'
import { graphqlHTTP } from 'express-graphql'

import {
  getPersona,
  getPersonas,
  createPersona,
  updatePersona,
  deletePersona,
} from './personasController.js'

const schema = buildSchema(`
  input DireccionInput {
    calle: String
    numero: Int
  }

  input PersonaInput {
    nombre: String
    edad: Int
    direccion: DireccionInput
  }

  type Direccion {
    calle: String
    numero: Int
  }

  type Persona {
    id: ID!
    nombre: String
    edad: Int
    direccion: Direccion
  }
  type Query {
    getPersona(id: ID!): Persona
    getPersonas(campo: String, valor: String): [Persona]
  }
  type Mutation {
    createPersona(datos: PersonaInput!): Persona
    updatePersona(id: ID!, datos: PersonaInput!): Persona
    deletePersona(id: ID!): Persona
  }
`)

export const graphqlMiddleware = graphqlHTTP({
  schema,
  rootValue: {
    getPersona: getPersona,
    getPersonas: getPersonas,
    createPersona: createPersona,
    updatePersona: updatePersona,
    deletePersona: deletePersona,
  },
  graphiql: true,
})