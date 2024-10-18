import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from '../routes/index';  
import { errorHandler } from '../middlewares/errorHandler';
import { logger } from '../middlewares/requestLogger';

export const server = express();


server.use(errorHandler);


server.use(logger);


server.use(cors());


server.use(express.json());

server.use(morgan('dev'));


server.use('/', router);

export default server;
