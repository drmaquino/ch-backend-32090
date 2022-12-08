import NoticiaDto from '../../models/NoticiaDto.js'

export default class DaoMongoDb {
    #collection

    constructor(db, nombre) {
        this.#collection = db.collection(nombre)
    }

    async obtenerTodas() {
        const documents = await this.#collection.find().project({ _id: 0 }).toArray()
        return documents.map(d => new NoticiaDto(d))
    }

    async obtenerPorId(id) {
        const buscada = await this.#collection.findOne({ id })
        if (!buscada) throw new Error('NOT_FOUND')
        return new NoticiaDto(buscada)
    }

    async guardar(dto) {
        await this.#collection.insertOne(dto.unfrozen())
    }

    async actualizarPorId(id, dto) {
        const { matchedCount, modifiedCount } = await this.#collection.replaceOne({ id }, dto)
        if (matchedCount === 0) throw new Error("NOT_FOUND")
        if (modifiedCount === 0) throw new Error("DATABASE_ERROR")
        return new NoticiaDto(dto)
    }

    async borrarPorId(id) {
        const { ok, value } = await this.#collection.findOneAndDelete({ id })
        if (!ok) throw new Error("DATABASE_ERROR")
        if (!value) throw new Error("NOT_FOUND")
        return new NoticiaDto(value)
    }
}
