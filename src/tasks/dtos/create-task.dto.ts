import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { TaskStatus } from '../../database/entities/task-status.enum';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsEnum(TaskStatus)
  status!: TaskStatus;
}