import { DataSource } from "typeorm";
import { DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from "../config/envs";
import { Credential } from "../entities/Credential";
import { User } from "../entities/user"; // Cambiado a "User"
import { Turno } from "../entities/appointment"; // Cambiado a "Appointment"

export const AppDataSource = new DataSource({
    type: DB_TYPE as any,

    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Credential, User, Turno], // Actualizado a "User" y "Appointment"
    subscribers:[],
    migrations:[],
});

export const credentialModel = AppDataSource.getRepository(Credential);
export const userModel = AppDataSource.getRepository(User);
export const appointmentsModel = AppDataSource.getRepository(Turno);

