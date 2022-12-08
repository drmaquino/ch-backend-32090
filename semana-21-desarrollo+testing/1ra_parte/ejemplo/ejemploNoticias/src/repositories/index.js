import NoticiasRepository from './NoticiasRepository.js';
import noticiasDao from '../database/index.js';

export default new NoticiasRepository(noticiasDao)
