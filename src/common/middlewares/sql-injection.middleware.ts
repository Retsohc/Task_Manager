import { Injectable, NestMiddleware } from '@nestjs/common';
import { Task } from '../../database/entities/task.entity';
import { TaskStatus } from '../../database/entities/task-status.enum';

@Injectable()
export class SqlInjectionMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    if (req.body) {
      for (const key in req.body) {
        req.body[key] = String(req.body[key]).replace(/['";]/g, '');
      }
    }
    next();
  }

  updateTaskStatus(id: number, status: TaskStatus): Task {
    const task = this.findTaskById(id);
    task.status_ = status;
    return task;
  }

  private findTaskById(id: number): Task {
    return new Task();
  }
}