import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { TasksService } from './tasks.service';
  import { CreateTaskDto } from './dtos/create-task.dto';
  
  @Controller('tasks')
  export class TasksController {
    constructor(private readonly tasksService: TasksService) {}
  
    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
      return this.tasksService.create(createTaskDto);
    }
  
    @Get()
    findAll() {
      return this.tasksService.findAll();
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: CreateTaskDto) {
      return this.tasksService.update(+id, updateTaskDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.tasksService.remove(+id);
    }
  }