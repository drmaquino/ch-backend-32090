const letras = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIFKLMNÑOPQRSTUVWXYZ'

function esLetra(letra) {
    return letras.includes(letra)
}

export default class Texto {
    constructor(texto) {
        this.texto = texto
    }

    obtenerFormateado() {
        if (this.texto === '') {
            return ''
        }

        let primeraLetra = this.texto[0]

        if (esLetra(primeraLetra))
            primeraLetra = primeraLetra.toUpperCase()

        let restoDeLaFrase = ''

        const resto = this.texto.slice(1)

        for (const letra of resto) {
            if (esLetra(letra)) {
                restoDeLaFrase += letra.toLowerCase()
            } else {
                restoDeLaFrase += letra
            }
        }

        return primeraLetra + restoDeLaFrase
    }
}