import React, {useState} from 'react';

type PropsType = {
    title: string
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(props.title)
    const editHandler = () => {
        setEdit(!edit)
    }
    return (
        edit
            ? <input value={props.title} onBlur={editHandler} autoFocus/>

            : <span onDoubleClick={editHandler}>{props.title}</span>

    );
};

