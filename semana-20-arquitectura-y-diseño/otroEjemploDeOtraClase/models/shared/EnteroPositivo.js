export class EnteroPositivo {
    #valor;
    constructor(valor, etiqueta = 'el valor') {
        if (!valor)
            throw new Error(`${etiqueta} es un campo requerido`);
        if (isNaN(valor))
            throw new Error(`${etiqueta} debe ser numerico`);
        if (valor <= 0)
            throw new Error(`${etiqueta} debe ser mayor a cero`);
        this.#valor = valor;
    }
    get valor() { return this.#valor; }
}
