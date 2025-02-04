import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TasksService } from './tasks.service';

@Injectable()
export class ScheduledTasksService {
  constructor(private readonly tasksService: TasksService) {}

  @Cron(CronExpression.EVERY_HOUR)
  handleCron() {
    console.log('Called every hour');
    // Aquí puedes agregar la lógica para las tareas automáticas
    // Por ejemplo, actualizar el estado de las tareas vencidas
  }
}