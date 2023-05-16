import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver';
import { TodoSchema } from './dto/todo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
