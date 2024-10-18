import { Router } from 'express';
import userRouter from './user/user';
import appointmentRouter from './appointment/appointment';

const router = Router();

 // Usamos el middleware de registro de solicitudes
router.use('/users', userRouter);
router.use('/appointments', appointmentRouter);
 // Usamos el middleware de manejo de errores

export default router;
