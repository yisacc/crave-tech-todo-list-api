import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId, IsNotEmpty } from 'class-validator';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateSubTaskInput{
  @IsNotEmpty()
  @Field()
  name:string

  @IsNotEmpty()
  @IsMongoId()
  @Field(()=>String)
  task: MongooseSchema.Types.ObjectId;
}
