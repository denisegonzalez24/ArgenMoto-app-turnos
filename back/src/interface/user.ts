// src/models/user.ts
import { Credencial } from './credencial';

export interface User {
  id: number;
  name: string;
  email: string;
  birthdate: Date;
  nDni: string; // Agregar nDni con tipo de dato correspondiente, si es necesario
  credentials: Credencial; // Cambiar credentialsIiD por credentials
  profilePicture?: string; // Este campo es opcional
}
