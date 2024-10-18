import { ICreateCredentialDto } from "./ICreateCredentialDto";

// src/interface/ICreateUserDto.ts
export interface ICreateUserDto {
    name: string;
    email: string;
    birthdate: Date;
    nDni?: string;
    username:string;
    password:string ;
    profilePicture?: string;
  }
  