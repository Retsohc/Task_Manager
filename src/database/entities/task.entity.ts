import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  title!: string;

  @Column()
  @IsString()
  description!: string;

  @Column({ type: 'enum', enum: TaskStatus, default: TaskStatus.NOT_STARTED })
  @IsEnum(TaskStatus)
  status_!: TaskStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_task!: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_task!: Date;
}