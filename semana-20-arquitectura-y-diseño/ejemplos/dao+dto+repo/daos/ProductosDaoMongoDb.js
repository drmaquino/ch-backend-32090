import ProductoDto from '../dtos/ProductoDto.js';
import ProductosDao from './ProductosDao.js';

export default class ProductosDaoMongoDb extends ProductosDao {

  constructor(cliente) {
    super()
    this.productos = cliente.getCollection("coderhouse", "articulos");
  }

  async getAll(query = {}) {
    const buscados = await this.productos.find(query).toArray();
    return buscados.map(p => new ProductoDto(p))
  }

  async getById(idProd) {
    const buscado = await this.productos.findOne({ id: idProd });
    if (!buscado) {
      throw new Error('producto no encontrado!')
    }
    return new ProductoDto(buscado)
  }

  async insert(prod) {
    await this.productos.insertOne(prod)
  }

  async updateById(idParaReemplazar, nuevoProd, insertIfNotFound = false) {
    const { ok } = await this.productos.findOneAndReplace({ id: idParaReemplazar }, nuevoProd, { upsert: insertIfNotFound })
    if (!ok) {
      throw new Error('ni agregado ni actualizado!')
    }
    return new ProductoDto(nuevoProd)
  }

  async deleteById(idProd) {
    const { ok, value: borrado } = await this.productos.findOneAndDelete({ id: idProd });
    if (!ok) {
      throw new Error('producto no encontrado!')
    }
    return new ProductoDto(borrado)
  }
}
