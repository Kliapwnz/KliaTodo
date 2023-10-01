import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

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
    changeTaskStatus:(id:string, isDone:boolean) => void
}

export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("")

    const addTask = () => {
        if(title.trim() === "") {
            return
        }
        props.addTask(title.trim())
        setTitle("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyDownHandler = ((e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    })
    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       className="error"
                />
                <button onClick={addTask}>+</button>
                <div className="error-message">Field is required</div>
            </div>
            <ul>
                {props.task.map(el => {
                    const onClickHandler = () => props.removeTask(el.id)
                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                        let newIsDone = e.currentTarget.checked
                        props.changeTaskStatus(el.id, newIsDone)
                    }
                    return (
                        <li key={el.id}>
                            <input type="checkbox"
                                   onChange={onChangeHandler}
                                   checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={onClickHandler}>✖
                            </button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All
                </button>
                <button onClick={onActiveClickHandler}>Active
                </button>
                <button onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
};

