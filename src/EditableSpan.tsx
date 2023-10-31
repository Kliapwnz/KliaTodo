import React from 'react';

type PropsType = {
    title: string
}

export const EditableSpan = (props: PropsType) => {
    return (
        <div>
            <span>{props.title}</span>
        </div>
    );
};

