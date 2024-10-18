// src/interface/appointment.ts
import { TurnoStatus } from './turno'; // Importa el enum TurnoStatus

export interface Appointment {
  id: number;
  userId: number;
  date: Date;
  time: string;
  status: TurnoStatus;
  user: any; // Agrega la propiedad user que se espera en Turno
}