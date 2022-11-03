import { listen } from './server.js';

const PORT = parseInt(process.argv[2]) || 8080

try {
    const server = await listen(PORT);
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`);
} catch (error) {
    console.log(error);
}
