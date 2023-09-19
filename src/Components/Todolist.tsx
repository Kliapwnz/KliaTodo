import React, {useState} from 'react';
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
    addTask: (title: string) => void
}

export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("")
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={e => setTitle(e.currentTarget.value)}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") {
                               addTask()
                           }
                       }}
                />
                <button onClick={addTask}>+
                </button>
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

