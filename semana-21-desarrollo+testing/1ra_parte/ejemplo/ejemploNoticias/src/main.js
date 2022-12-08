import * as config from './config.js';
import { app } from './server.js';

const PORT = config.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`);
});
server.on('error', error => console.log('Servidor express en error:', error));
