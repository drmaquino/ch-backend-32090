function asegurarValorNoNulo(valor, errorMsg) {
    if (valor === undefined || valor === null)
        throw new Error(errorMsg);
    return valor;
}

function asegurarValorPositivo(valor, errorMsg) {
    if (valor === undefined || valor === null)
        throw new Error(errorMsg);
    return valor;
}

export default class Usuario {
    #id;
    #email;
    #alias;
    #edad;

    constructor({ id, email, alias, edad }) {
        asegurarValorNoNulo(id, 'el id no puede ser nulo');
        asegurarValorNoNulo(email, 'el email no puede ser nulo');
        asegurarValorNoNulo(alias, 'el alias no puede ser nulo');

        this.#id = id;
        this.#email = email;
        this.#alias = alias;
        this.setEdad(edad);
    }

    // accessors (getter)
    getEdad() { return this.#edad; }
    getId() { return this.#id; }
    getAlias() { return this.#alias; }
    getEmail() { return this.#email; }

    // mutators (setter)
    setEdad(edad) {
        asegurarValorNoNulo(edad, 'la edad no puede ser nulo');
        asegurarValorPositivo(edad, 'la edad debe ser positiva');
        this.#edad = edad;
    }

    asDto() {
        return Object.freeze({
            id: this.#id,
            email: this.#email,
            alias: this.#alias,
            edad: this.#edad,
        });
    }
}
