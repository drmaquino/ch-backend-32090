export default class ProductoDto {
  constructor({ id, nombre, precio, stock }) {
    this.id = id
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}
