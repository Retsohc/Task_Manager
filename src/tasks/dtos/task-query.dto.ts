import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../entities/task-status.enum';

export class TaskQueryDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}