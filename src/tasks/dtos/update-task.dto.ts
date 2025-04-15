import { IsEnum } from 'class-validator';
import { TaskStatus } from '../../database/entities/task-status.enum';

export class UpdateTaskDto {
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}