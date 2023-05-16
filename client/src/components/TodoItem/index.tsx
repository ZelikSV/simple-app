import React, {ChangeEvent, useMemo, useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

import './styles.css';
import TextField from "../TextField";

type Props = {
    todoItemText: string;
    id: string;
    handleItem: (id: string, text: string) => void;
    removeItem: (id: string) => void;
}

enum Mode {
    VIEW = 'VIEW',
    EDIT = 'EDIT'
}

const TodoItem:React.FC<Props> = ({todoItemText, id, handleItem, removeItem}) => {
    const [mode, setMode] = useState(Mode.VIEW);
    const [text, setText] = useState(todoItemText);

    const deleteElem = () => {
        removeItem(id);
    }

    const editItem = (evt: ChangeEvent<HTMLInputElement>) => {
        setText(evt.target.value);
    }

    const saveTodo = () => {
        handleItem(id, text);



        setMode(Mode.VIEW);
    }

    const renderItem = useMemo(() => {
        if(mode === Mode.VIEW) {
            return (
            <>
                <p>{todoItemText}</p>
                <EditIcon onClick={() => setMode(Mode.EDIT)} />
                <DeleteIcon onClick={deleteElem} />
            </>);
        }

        if(mode === Mode.EDIT) {
            return (
                <>
                    <TextField defaultValue={text} onChange={editItem} />
                    <SaveIcon onClick={saveTodo} />
                </>
            );
        }
    }, [mode, text, id, deleteElem]);

    return (
        <div className="item-container">
            {renderItem}
        </div>
    );
}

export default TodoItem;
