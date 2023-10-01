import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

import {FilterValuesType} from "../App";


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    task: TaskType[]
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (todolistId: string, value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    filter: FilterValuesType
}

export const Todolist = (props: PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title.trim())
            setTitle("")
        } else {
            setError("Title is required")
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onKeyDownHandler = ((e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.key === "Enter") {
            addTask()
        }
    })
    const onAllClickHandler = () => {
        props.changeFilter(props.id, "all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter(props.id, "active",)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter(props.id, "completed")
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={title}
                       onChange={onChangeHandler}
                       onKeyDown={onKeyDownHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
            <ul>
                {props.task.map(el => {
                    const onClickHandler = () => props.removeTask(el.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDone = e.currentTarget.checked
                        props.changeTaskStatus(el.id, newIsDone)
                    }
                    return (
                        <li key={el.id} className={el.isDone ? "is-done" : ""}>
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
                <button className={props.filter === "all" ? "active-filter" : ""}
                        onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === "active" ? "active-filter" : ""}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === "completed" ? "active-filter" : ""}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </div>
    );
};

