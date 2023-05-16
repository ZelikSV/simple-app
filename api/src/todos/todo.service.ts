import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Todo } from './todo.entity';
import { CreateTodoInput } from './dto/todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name)
    private readonly todoModel: Model<Todo>,
  ) {}

  async create(createTodoInput: CreateTodoInput): Promise<Todo> {
    const createdTodo = new this.todoModel(createTodoInput);
    return createdTodo.save();
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async update(id: string, updateTodoInput: CreateTodoInput): Promise<Todo> {
    return this.todoModel
      .findByIdAndUpdate(id, updateTodoInput, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndRemove(id).exec();
  }
}
