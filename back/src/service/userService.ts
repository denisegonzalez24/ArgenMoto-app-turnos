import Credential from "../entities/Credential";
import { Turno } from "../entities/appointment";
import { User } from "../entities/user";
import { ICreateCredentialDto } from "../interface/ICreateCredentialDto";
import { ICreateUserDto } from "../interface/ICreateUserDto";
import {Credencial} from "../interface/credencial";
import { userModel } from "../config/data-source";
import { createCredential } from "./credentialService";

export const getAllUsersService = async(): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: {
            
            appointments: true
        }
    });
    
    return allUsers;
}

export const getUserByIdService = async (id: number): Promise<User> => {
    const user: User | null = await userModel.findOne({
        where: { id },
        relations: ["appointments"]
    });
    if (!user) throw new Error("usuario no encontrado ")
    return user;
}
export const createUserService = async (createUserDto: ICreateUserDto) => {
    // Crear un nuevo usuario con los datos proporcionados
    const newUser: User = userModel.create(createUserDto);

    // Guardar el nuevo usuario en la base de datos
    await userModel.save(newUser);

    // Crear las credenciales del usuario
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password,
    });

    // Asociar las credenciales creadas con el nuevo usuario
    newUser.credential = newCredential;

    // Guardar el usuario actualizado con la relación establecida
    await userModel.save(newUser);

    return newUser;
};


export const findUserByCredentialId = async (credentiialid:number) =>{
    const user : User |null= await userModel.findOneBy({
        credential:{id:credentiialid}
    })
    if (!user) throw new Error("usuario no encontrado ")
    return user;
}
