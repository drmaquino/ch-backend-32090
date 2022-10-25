import { crearServidor } from './server.js';

// const PORT = process.env.PORT ?? 8000;
const PORT = process.argv[2] ?? 8000;
crearServidor(PORT)
console.log(`escuchando en puerto ${PORT}`)