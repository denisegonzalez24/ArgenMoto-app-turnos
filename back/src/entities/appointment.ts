import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

// Enum de Status para representar los estados de un turno
export enum TurnoStatus {
  SCHEDULED = 'scheduled',
  CANCELLED = 'cancelled',
}

@Entity()
export class Turno {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.appointments)
  user: User;

  @Column({ type: 'date' })
  date: Date;

  @Column({ type: 'time' })
  time: string;

  @Column()
  userId: number;

  @Column({ type: 'enum', enum: TurnoStatus, default: TurnoStatus.SCHEDULED })
  status: TurnoStatus; // Usar el enum para representar el estado del turno
}
