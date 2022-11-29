import { Router } from 'express';
import { postVentasController, getAllVentasController } from '../controllers/postVentasController.js';

export const ventasRouter = Router();
ventasRouter.post('/api/ventas', postVentasController);
ventasRouter.get('/api/ventas', getAllVentasController);
