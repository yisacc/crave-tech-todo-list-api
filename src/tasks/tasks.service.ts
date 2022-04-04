import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskDocument, TaskEntity } from './tasks.schema';
import { CreateTaskInput } from './dto/create-task.input';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(TaskEntity.name)
    private readonly taskModel: Model<TaskDocument>
  ){}

  async create(createTaskInput: CreateTaskInput):Promise<TaskEntity> {
    const create:TaskDocument=new this.taskModel({
      name:createTaskInput.name,
    });
    return await create.save()
  }

  async findAll() {
    return this.taskModel.find();
  }
}
