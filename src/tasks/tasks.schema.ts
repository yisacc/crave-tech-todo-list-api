import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { SubTaskEntity } from '../sub-tasks/sub-tasks.schema';


@Schema({ timestamps: true, versionKey: false })
@ObjectType()
export class TaskEntity{
  @Field()
  _id: string;

  @Prop({
    required: true,
    unique:true,
    index: true,
  })
  @Field()
  name: string;

  @Prop({
    required: true,
    type: [MongooseSchema.Types.ObjectId],
    default:[],
    ref: SubTaskEntity.name,
  })
  @Field(()=>[SubTaskEntity] )
  subTasks: MongooseSchema.Types.ObjectId[];
}

export const TaskDatabaseName = 'tasks';
export const TaskSchema = SchemaFactory.createForClass(TaskEntity);

export type TaskDocument = TaskEntity & Document;
