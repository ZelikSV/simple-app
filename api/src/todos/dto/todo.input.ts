import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  completed?: boolean;
}

@InputType()
export class UpdateTodoInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  completed?: boolean;
}

@InputType()
export class DeleteTodoInput {
  @Field()
  id: string;
}
