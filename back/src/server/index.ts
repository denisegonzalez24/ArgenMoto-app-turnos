import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '..//routes/user/user'; // Importar rutas de usuarios
import appointmentRoutes from '../routes//appointment/appointment'; // Importar rutas de citas

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/appointments', appointmentRoutes);

export default app;
