import { Module } from '@nestjs/common';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

import { TodoModule } from './todos/todo.module';
import { TodoService } from './todos/todo.service';
import { TodoSchema } from './todos/dto/todo.schema';
import { TodoResolver } from './todos/todo.resolver';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/mydatabase', {}),
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'src/schemas/schema.gql',
      driver: ApolloDriver,
    }),
    TodoModule,
  ],
  providers: [TodoResolver, TodoService],
})
export class AppModule {}
