import ProductoDto from "../dtos/ProductoDto.js";
import Producto from "../modelos/Producto.js";
import productosDao from '../daos/ProductosDaoFactory.js'

export default class ProductosRepo {

    constructor() {
        this.dao = productosDao
    }

    async getAll() {
        const dtos = await this.dao.getAll({})
        return dtos.map(dto => new Producto(dto))
    }

    async getById(idProd) {
        const dto = await this.dao.getById(idProd)
        return new Producto(dto)
    }

    async save(prod) {
        const dto = new ProductoDto(prod.datos())
        const dtoGuardado = await this.dao.updateById(prod.id, dto, true);
        return new Producto(dtoGuardado)
    }

    async removeById(idProd) {
        const dto = await this.dao.deleteById(idProd)
        return new Producto(dto)
    }
}