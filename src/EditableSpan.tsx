import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    oldTitle: string
    onClick: (title: string) => void
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(props.oldTitle)
    const editHandler = () => {
        setEdit(!edit)
        if (edit) {
            addTask()
        }

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    const addTask = () => {
        props.onClick(newTitle)
    }
    return (
        edit
            ? <input value={newTitle} onBlur={editHandler} autoFocus onChange={onChangeHandler}/>

            : <span onDoubleClick={editHandler}>{props.oldTitle}</span>

    );
};

