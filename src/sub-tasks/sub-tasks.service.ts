import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubTaskDocument, SubTaskEntity } from './sub-tasks.schema';
import { CreateSubTaskInput } from './dto/create-sub-task.input';
import { UpdateSubTaskStatusInput } from './dto/update-sub-task.status-input';

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

  async updateStatus({id,isCompleted}:UpdateSubTaskStatusInput):Promise<SubTaskDocument> {
    let ObjectId = require('mongoose').Types.ObjectId;
    const subTask:SubTaskDocument=await this.subTaskModel.findById(new ObjectId(id))
    subTask.isCompleted=isCompleted;
    return await subTask.save()
  }
}
