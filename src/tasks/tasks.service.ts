import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskQueryDto } from './dtos/task-query.dto';
import { Task } from '../database/entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  findAll(taskQueryDto: TaskQueryDto): Promise<Task[]> {
    return this.tasksRepository.getTasks(taskQueryDto);
  }

  update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.tasksRepository.updateTaskStatus(id, updateTaskDto);
  }

  remove(id: number): Promise<void> {
    return this.tasksRepository.deleteTask(id);
  }
}