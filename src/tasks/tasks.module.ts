import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduledTasksService } from './scheduled-tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TasksRepository]),
    ScheduleModule.forRoot(),
  ],
  providers: [TasksService, ScheduledTasksService],
})
export class TasksModule {}