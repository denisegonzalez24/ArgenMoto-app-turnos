import { Request, Response } from 'express';
import { getAllUsersService, getUserByIdService, createUserService, findUserByCredentialId } from '../service/userService';
import { ICreateUserDto } from '../interface/ICreateUserDto';
import { User } from '../entities/user';
import { ICreateCredentialDto } from '../interface/ICreateCredentialDto';
import { Credencial } from '../interface/credencial';
import { validarteCredental } from '../service/credentialService';

export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
    try {
        const users : User[]|null= await getAllUsersService();
        res.status(200).json(users);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};


export const getUserByIdController = async (req: Request<{id: string},{},{}>, res: Response) => {
    const userId = parseInt(req.params.id);
    try {
      const {id} = req.params;
        const user:User = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};


export const createUserController = async (req: Request<{},{},ICreateUserDto>, res: Response) => {
  try{
  const{name, email,birthdate,nDni,username,password}=req.body;
  const newUser: User = await createUserService({
    name,
    email,
    birthdate,
    nDni,
    username,
    password,
  });
    res.status(201).json(newUser);
   }catch (error:any) {
        res.status(400).json({ message: error.message });
    }
};


export const findUserByCredentialIdController = async (
  req: Request<{}, {}, ICreateCredentialDto>,
  res: Response
) => {
  try {
    const { username, password } = req.body;
    const credential: Credencial = await validarteCredental({
      username,
      password,
    });
    const user: User|null = await findUserByCredentialId(credential.id);
    res.status(200).json({
      loggin: true,
      user,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
    });
  }
};
