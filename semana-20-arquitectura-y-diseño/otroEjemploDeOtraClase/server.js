import express from 'express';
import { ventasRouter } from './routers/ventasRouter.js';

export const app = express();
app.use(express.json());
app.use(ventasRouter);

