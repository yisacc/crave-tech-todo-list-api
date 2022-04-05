import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubTaskDocument, SubTaskEntity } from './sub-tasks.schema';
import { CreateSubTaskInput } from './dto/create-sub-task.input';

@Injectable()
export class SubTasksService {
  constructor(
    @InjectModel(SubTaskEntity.name)
    private readonly subTaskModel: Model<SubTaskDocument>
  ){}

  async create(createSubTaskInput: CreateSubTaskInput):Promise<SubTaskEntity> {
    const create:SubTaskDocument=new this.subTaskModel({
      name:createSubTaskInput.name,
    });
    return await create.save()
  }

  async findAll() {
    return this.subTaskModel.find();
  }

}
