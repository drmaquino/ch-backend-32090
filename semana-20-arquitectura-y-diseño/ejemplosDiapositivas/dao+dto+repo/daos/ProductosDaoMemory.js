import ProductoDto from '../dtos/ProductoDto.js';
import ProductosDao from './ProductosDao.js';

export default class ProductosDaoMemory extends ProductosDao {

  #productos

  constructor() {
    super()
    this.#productos = []
  }

  static #matchesQuery(obj, query) {
    const conditions = Object.entries(query)
    for (const [key, value] of conditions) {
      if (!obj[key] || obj[key] != value) return false
    }
    return true
  }

  async getAll(query = {}) {
    const buscados = this.#productos.filter(p => ProductosDaoMemory.#matchesQuery(p, query))
    return buscados.map(p => new ProductoDto(p))
  }

  async getById(idProd) {
    const buscado = this.#productos.find(p => p.id === idProd)
    if (!buscado) {
      throw new Error(`producto con Id '${idProd}' no encontrado`)
    }
    return new ProductoDto(buscado)
  }

  async insert(prod) {
    this.#productos.push(prod)
  }

  async updateById(idParaReemplazar, nuevoProd, insertIfNotFound = false) {
    const indexProd = this.#productos.findIndex(p => p.id === idParaReemplazar)
    if (indexProd !== -1) {
      this.#productos[indexProd] = nuevoProd
    } else if (insertIfNotFound) {
      this.#productos.push(nuevoProd)
    } else {
      throw new Error('ni agregado ni actualizado!')
    }
    return nuevoProd
  }

  async deleteById(idProd) {
    const index = this.#productos.findIndex(p => p.id == idProd)
    const [buscado] = this.#productos.splice(index, 1)
    return new ProductoDto(buscado)
  }
}
