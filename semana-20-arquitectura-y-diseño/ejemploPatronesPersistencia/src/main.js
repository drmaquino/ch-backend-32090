import ServicioDeUsuarios from './negocio/ServicioDeUsuarios.js';

const userService = new ServicioDeUsuarios()

const dtoUsuario = await userService.registrarNuevoUsuario({
    nombre: 'marian',
    email: 'marian@mail.com',
    alias: 'profemarian',
    edad: 36
})

console.log(dtoUsuario)


// investigar properties ! para usar en lugar de getters y setters

// console.log(usuario.getAlias())