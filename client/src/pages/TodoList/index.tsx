import {FC} from "react";
import {gql, useMutation, useQuery} from '@apollo/client';

import TodoItem from "../../components/TodoItem";
import TodoItemForm from "../../components/TodoItemForm";

import './styles.scss';

export interface ITodoItem {
    title: string;
    id: string;
    description?: string;
    completed?: boolean;
}

const TODO_FRAGMENT = gql`
  fragment TodoFragment on Todo {
    id
    title
    completed
  }
`;


const GET_TODOS = gql`
 query {
  todos {
    ...TodoFragment
  }
}
${TODO_FRAGMENT}`;

const ADD_TODO = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
       ...TodoFragment
    }
  }
${TODO_FRAGMENT}`;

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: ID!, $updateTodoInput: UpdateTodoInput!) {
    updateTodo(id: $id, updateTodoInput: $updateTodoInput) {
      ...TodoFragment
    }
  }
${TODO_FRAGMENT}`;

const DELETE_TODO = gql`
  mutation DeleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
    ...TodoFragment
    }
  }
${TODO_FRAGMENT}`;


const TodoList:FC = () => {
    const { loading, error, data, refetch } = useQuery<{todos: ITodoItem[]}>(GET_TODOS);
    const [addTodo] = useMutation(ADD_TODO);
    const [updateTodo] = useMutation(UPDATE_TODO);
    const [deleteTodo] = useMutation(DELETE_TODO);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error :(</p>;

    const createTodo = async (text: string) => {
        try {
         await addTodo({
                variables: {
                    input: {
                        title: text,
                        description: `${text} - description`,
                        completed: false
                    }
                }
            });

         await refetch();
        } catch(error) {
            console.log(error);
        }
    }

    const handleItem = async (id: string, newData: string) => {
        try {
            await updateTodo({
                variables: {
                    id,
                    updateTodoInput: {
                        title: newData,
                        description: `${newData} - description`,
                        completed: false
                    }
                }
            });
            await refetch();
        } catch(error) {
                console.log(error);
        }
    }

    const removeItem = async (id: string) => {
        try {
            await deleteTodo({
                variables: {
                    input: {
                        id
                    }
                }
            });

            await refetch();
    } catch(error) {
        console.log(error);
    }
    }

    return (
        <div className="list-wrapper">
            <TodoItemForm defaultValue="" handleSubmit={createTodo} />
            <div className="list-container">
                {data?.todos.map(item => <TodoItem key={item.id} id={item.id} todoItemText={item.title} handleItem={handleItem} removeItem={removeItem} />)}
            </div>
        </div>
    );
}

export default TodoList;
