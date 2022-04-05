import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import {Schema as MongooseSchema} from 'mongoose'

@InputType()
export class CreateTaskInput{
  @IsNotEmpty()
  @Field()
  name:string

  @IsNotEmpty()
  @IsMongoId({each:true})
  @Field(()=>[String])
  subTasks:MongooseSchema.Types.ObjectId[]

}
