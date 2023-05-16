import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';

import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import {
  CreateTodoInput,
  DeleteTodoInput,
  UpdateTodoInput,
} from './dto/todo.input';

@Resolver()
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Mutation(() => Todo)
  async createTodo(
    @Args('input') createTodoInput: CreateTodoInput,
  ): Promise<Todo> {
    return this.todoService.create(createTodoInput);
  }

  @Query(() => [Todo])
  async todos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Query(() => Todo)
  async todo(@Args('id', { type: () => ID }) id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Mutation(() => Todo)
  async updateTodo(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateTodoInput') updateTodoInput: UpdateTodoInput,
  ): Promise<Todo> {
    return this.todoService.update(id, updateTodoInput);
  }

  @Mutation(() => Todo)
  async deleteTodo(@Args('input') input: DeleteTodoInput) {
    return this.todoService.remove(input.id);
  }
}
