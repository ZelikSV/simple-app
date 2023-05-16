import React, {ChangeEvent, FormEvent, useState} from 'react';

import TextField from "../TextField";

type Props = {
    defaultValue: string;
    handleSubmit: (text: string) => void;
}

const TodoItemForm:React.FC<Props> = ({defaultValue, handleSubmit}) => {
    const [todoText, setTodoText]= useState(defaultValue);

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setTodoText(evt.target.value);
    }

    const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        handleSubmit(todoText);
        setTodoText('');
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <TextField label="Text field" defaultValue="" value={todoText} onChange={handleChange} />
        </form>
    );
}

export default TodoItemForm;
