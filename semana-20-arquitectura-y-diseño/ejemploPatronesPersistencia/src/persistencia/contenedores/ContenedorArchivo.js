import fs from 'fs'

export default class ContendorArchivo {
    constructor(ruta) {
        this.elementos = []
        this.ruta = ruta
    }

    // espera recibir un DTO
    async guardar(dto) {
        let contenido = await fs.promises.readFile(this.ruta, 'utf-8')
        this.elementos = JSON.parse(contenido)
        this.elementos.push(dto)
        contenido = JSON.stringify(this.elementos, null, 2)
        await fs.promises.writeFile(this.ruta, contenido)
    }

    // devuelve un array de DTOs
    async recuperar() {
        let contenido = await fs.promises.readFile(this.ruta, 'utf-8')
        this.elementos = JSON.parse(contenido)
        return this.elementos
    }
}