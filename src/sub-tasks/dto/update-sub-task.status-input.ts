import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateSubTaskStatusInput{
  @IsNotEmpty()
  @Field(() => String)
  id: string;

  @IsNotEmpty()
  @Field()
  isCompleted:boolean
}
