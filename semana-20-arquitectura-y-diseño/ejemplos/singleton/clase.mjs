// class Persona {

//     static #instancia

//     constructor() {
//         if (!Persona.instancia) {
//             Persona.instancia = { nombre: 'marian', random: Math.random() * 1000 }
//         }
//         return Persona.instancia
//     }
// }

// console.log(new Persona())
// console.log(new Persona())
// console.log(new Persona())

export class Persona {

    constructor() {
        return { nombre: 'marian', random: Math.random() * 1000 }
    }
}
