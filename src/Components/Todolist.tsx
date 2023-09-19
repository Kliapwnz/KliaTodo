import React from 'react';
import {FilterValuesType} from "../App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    task: TaskType[]
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map(el =>
                    <li key={el.id}>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                        <button onClick={() => {
                            props.removeTask(el.id)
                        }}>✖
                        </button>
                    </li>
                )}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeFilter("all")
                }}>All
                </button>
                <button onClick={() => {
                    props.changeFilter("active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeFilter("completed")
                }}>Completed
                </button>
            </div>
        </div>
    );
};

