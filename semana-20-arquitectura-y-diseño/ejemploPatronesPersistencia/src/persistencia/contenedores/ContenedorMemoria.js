export default class ContendorMemoria {
    constructor(ruta) {
        this.elementos = []
    }

    // espera recibir un DTO
    async guardar(dto) {
        this.elementos.push(dto)
    }

    // devuelve un array de DTOs
    async recuperar() {
        return this.elementos
    }
}