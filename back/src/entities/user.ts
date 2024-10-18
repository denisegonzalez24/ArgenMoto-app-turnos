
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Credential } from './Credential'; // Asegúrate de que el nombre del archivo sea correcto
import { Turno } from './appointment'; // Asegúrate de que el nombre del archivo sea correcto

@Entity({ name: 'users' })

export class User {
  @PrimaryGeneratedColumn()
  id: number;


  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  birthdate: Date;

  @Column()
  nDni: string;

  @OneToOne(() => Credential)
  @JoinColumn()
  credential: Credential;

  @Column({ nullable: true })
  profilePicture: string;

  @OneToMany(() => Turno, appointment => appointment.user)
  appointments: Turno[];

}
