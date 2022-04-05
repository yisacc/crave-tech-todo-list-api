import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import {Schema as MongooseSchema} from 'mongoose'
import { CreateTaskInput } from './create-task.input';

@InputType()
export class UpdateTaskInput{
  @IsNotEmpty()
  @Field(() => String)
  id: string;

  @IsNotEmpty()
  @IsMongoId()
  @Field(()=>String)
  subTask:MongooseSchema.Types.ObjectId
}
