import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TaskEntity } from './tasks.schema';
import { TasksService } from './tasks.service';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Resolver(() => TaskEntity)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => TaskEntity)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput
  ):Promise<TaskEntity> {
    return await this.tasksService.create(createTaskInput);
  }

  @Query(() => [TaskEntity], { name: 'tasks' })
  async findAll():Promise<TaskEntity[]> {
    return await this.tasksService.findAll();
  }

  @Mutation(() => TaskEntity)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput
  ):Promise<TaskEntity> {
    return await this.tasksService.update(
      updateTaskInput
    );
  }

}
