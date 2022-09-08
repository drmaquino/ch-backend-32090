import { clienteSql } from './clienteSql.js'

clienteSql.schema.hasTable('personas')
    .then(exists => {
        if (!exists) {
            clienteSql.schema.createTable('personas', tabla => {
                tabla.increments('id'),
                    tabla.string('nombre'),
                    tabla.integer('edad')
            })
                .then(() => {
                    console.log('tabla "personas" creada!')
                })
        } else {
            console.log('la tabla "personas" ya existe. no se realizaron cambios')
        }
    })
    .finally(() => {
        clienteSql.destroy()
    })
