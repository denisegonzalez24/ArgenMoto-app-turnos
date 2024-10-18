import { Request, Response } from 'express';
import { scheduleAppointmentService, getAllApointmentService, getAppointmentByIdService, cancelAppointmentService } from '../service/appointmentService';
import { IScheduleAppointmentDto } from '../interface/ISheduleAppointmentDto';
import { Appointment } from '../interface/appointment';

// Controlador para programar una nueva cita
export const scheduleAppointmentController = async (req: Request, res: Response) => {
    const {date,time,userId,description}= req.body;
    try {
        const newAppointment = await scheduleAppointmentService({
          date,time,userId,description
        });
        res.status(201).json(newAppointment);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};

// Controlador para obtener todas las citas
export const getAllAppointmentsController = async (req: Request, res: Response) => {
    try {
        const allAppointments: Appointment[] = await getAllApointmentService();
        res.status(200).json(allAppointments);
    } catch (error:any) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener una cita por su ID
export const getAppointmentByIdController = async (req: Request<{turnId:string}, {}, {}>, 
  res: Response) => {
    const {turnId} = req.params;
    try {
        const appointment = await getAppointmentByIdService(Number(turnId));
        res.status(200).json(appointment);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
};

// Controlador para cancelar una cita
export const cancelAppointmentController = async (req: Request<{turnId:string},{},{}>,
   res: Response) => {
    const {turnId} = req.params;
    try {
        await cancelAppointmentService(Number(turnId));
        res.status(200).json({ message: 'turno cancelado' });
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
};
