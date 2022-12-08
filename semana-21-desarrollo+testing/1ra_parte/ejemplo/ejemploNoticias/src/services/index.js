import NoticiasApi from './NoticiasApi.js';
import noticiasRepository from '../repositories/index.js';

const noticiasApi = new NoticiasApi(noticiasRepository)

export default noticiasApi
