import express from 'express';
import { getController } from './getController.js';

export const apiRouter = express.Router();
apiRouter.get('/', getController);
