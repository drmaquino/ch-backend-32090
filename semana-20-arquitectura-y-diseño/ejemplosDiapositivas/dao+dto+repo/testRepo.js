import ProductosRepo from "./repositories/ProductosRepo.js"
import ProductoService from './servicios/ProductosService.js'

const repo = new ProductosRepo()
const productoService = new ProductoService(repo)

const datos1 = {
  nombre: 'sonrisas',
  precio: 100,
  stock: 100
}

const datos2 = {
  nombre: 'tita',
  precio: 80,
  stock: 100
}

function mostrarTodos(prods) {
  prods.forEach(p => mostrar(p))
}

function mostrar(prod) {
  console.log(prod.datos())
}

console.log('\nagregando dos.')
const prod1 = await productoService.crearUno(datos1)
const prod2 = await productoService.crearUno(datos2)

console.log('\nmostrando todos:')
mostrarTodos(await productoService.obtenerTodos())

console.log('\nborrando uno:')
mostrar(await productoService.borrarUno(prod1.id))

console.log('\nmostrando todos:')
mostrarTodos(await productoService.obtenerTodos())

console.log('\nmodificando uno:')
mostrar(await productoService.modificarPrecio(prod2.id, 666))

console.log('\nmostrando todos:')
mostrarTodos(await productoService.obtenerTodos())

// esto tira error!!
productoService.modificarPrecio(prod2.id, 'abc')
  .catch(err => console.log(`Error: ${err.message}`))

