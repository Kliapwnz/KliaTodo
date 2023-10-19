import React, {useState} from 'react';

type PropsType = {
    title: string
}

export const EditableSpan = (props: PropsType) => {
    const [edit, setEdit] = useState(false)
    return (
        edit
            ? <input/>
            : <span>{props.title}</span>

    )
        ;
};

