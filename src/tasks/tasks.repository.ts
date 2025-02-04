import { EntityRepository, Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { TaskStatus } from './entities/task-status.enum';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TaskQueryDto } from './dtos/task-query.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.create({
      title,
      description,
      status: TaskStatus.PENDING,
    });

    await this.save(task);
    return task;
  }

  async updateTaskStatus(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const { status } = updateTaskDto;
    const task = await this.findOne({ where: { id } });

    if (!task) {
      throw new Error('Task not found');
    }

    if (status === undefined) {
      throw new Error('Status is undefined');
    }

    task.status = status;
    await this.save(task);
    return task;
  }

  async getTasks(taskQueryDto: TaskQueryDto): Promise<Task[]> {
    const { status, search } = taskQueryDto;
    const query = this.createQueryBuilder('task');

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(task.title LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.findOne({ where: { id } });

    if (!task) {
      throw new Error('Task not found');
    }

    return task;
  }

  async deleteTask(id: number): Promise<void> {
    const result = await this.delete(id);

    if (result.affected === 0) {
      throw new Error('Task not found');
    }
  }
}