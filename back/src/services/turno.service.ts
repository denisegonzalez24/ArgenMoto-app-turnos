import { Turno, Status } from "../interface/turnoInterface"; // Importa tanto Turno como Status desde la interfaz

// Arreglo de turnos inicializado vacío
const turnos: Turno[] = [];

const getAllTurnos = (): Turno[] => turnos;

const getTurnoById = (id: number): Turno | undefined => turnos.find(turno => turno.id === id);

const createTurno = (turno: Turno, userId: number): void => {
    // Asignar el ID del usuario al turno
    turno.id = turnos.length + 1; // Asigna un ID único basado en la longitud actual del arreglo
    turno.userId = userId;
    turno.status = Status.ACTIVE; // Por defecto, el nuevo turno se establece como activo
    // Agregar el turno al arreglo de turnos
    turnos.push(turno);
};

const cancelTurnoById = (id: number): void => {
    // Encontrar el turno correspondiente por ID y cambiar su estado a "cancelled"
    const turno = turnos.find(turno => turno.id === id);
    if (turno) {
        turno.status = Status.CANCELED;
    }
};

export const turnoService = {
    getAllTurnos,
    getTurnoById,
    createTurno,
    cancelTurnoById
};
