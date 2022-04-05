import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { TaskEntity } from '../tasks/tasks.schema';


@Schema({ timestamps: true, versionKey: false })
@ObjectType()
export class SubTaskEntity{
  @Field()
  _id: string;

  @Prop({
    required: true,
    unique:true,
    index: true,
  })
  @Field()
  name: string;
}

export const SubTaskDatabaseName = 'subTasks';
export const SubTaskSchema = SchemaFactory.createForClass(SubTaskEntity);

export type SubTaskDocument = SubTaskEntity & Document;
