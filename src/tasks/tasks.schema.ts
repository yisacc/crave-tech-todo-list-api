import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document} from 'mongoose';
import { Field, ObjectType } from '@nestjs/graphql';


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
}

export const TaskDatabaseName = 'tasks';
export const TaskSchema = SchemaFactory.createForClass(TaskEntity);

export type TaskDocument = TaskEntity & Document;
