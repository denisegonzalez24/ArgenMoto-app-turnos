import { Router } from 'express';
import { scheduleAppointmentController, getAllAppointmentsController,getAppointmentByIdController,cancelAppointmentController} from '../../controller/appointment';

const router = Router();

router.get('/', getAllAppointmentsController);
router.get('/:id', getAppointmentByIdController);
router.post('/schedule',scheduleAppointmentController );
router.put('/cancel/:turnId', cancelAppointmentController);

export default router;
