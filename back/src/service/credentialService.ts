// src/services/credentialService.ts
import { getRepository } from 'typeorm';
import { Credential } from '../entities/Credential';
import { ICreateCredentialDto } from '../interface/ICreateCredentialDto';
import {Credencial} from '../interface/credencial';
import { credentialModel } from '../config/data-source';
import { IValidateCredentialDto } from '../interface/IValdateCredentialDto';
import { error } from 'console';

export const createCredential = async (
  createCredentialDto: ICreateCredentialDto
): Promise<Credential> => {
  const newCredential: Credencial = credentialModel.create(createCredentialDto);
  const savedCredential = await credentialModel.save(newCredential);
  
  return savedCredential;
}
export const validarteCredental = async(
  validateCredentialDto:IValidateCredentialDto
): Promise<Credential> => {
  const {username,password}= validateCredentialDto;
  const foundCredential:Credential|null= await credentialModel.findOneBy({username})
  if(!foundCredential)throw Error ("Credencial invaldia");
  if (password!== foundCredential?.password) throw Error("Credencial incorrecta")
  return foundCredential;
};