import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SubTaskEntity } from './sub-tasks.schema';
import { SubTasksService } from './sub-tasks.service';
import { CreateSubTaskInput } from './dto/create-sub-task.input';

@Resolver(() => SubTaskEntity)
export class SubTasksResolver {
  constructor(private readonly subTasksService: SubTasksService) {}

  @Mutation(() => SubTaskEntity)
  async createSubTask(
    @Args('createSubTaskInput') createSubTaskInput: CreateSubTaskInput
  ):Promise<SubTaskEntity> {
    return await this.subTasksService.create(createSubTaskInput);
  }

  @Query(() => [SubTaskEntity], { name: 'subTasks' })
  async findAll():Promise<SubTaskEntity[]> {
    return await this.subTasksService.findAll();
  }

}
