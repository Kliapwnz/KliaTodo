import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (todolistId: string, taskID: string, newTitle: string) => void
    updateTodolist: (todolistId: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
    const addTask = (title: string) => {
        props.addTask(title, props.id)
    }

    const updateTodolistHandler = (newTitle: string) => {
        props.updateTodolist(props.id, newTitle)
    }

    const updateTaskHandler = (tID: string, newTitle: string) => {
        props.updateTask(props.id, tID, newTitle)
    }

    return <div>
        <h3>
            <EditableSpan oldTitle={props.title} onClick={updateTodolistHandler}/>
            <IconButton aria-label="delete"
                        onClick={removeTodolist}
            >
                <DeleteIcon/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <EditableSpan oldTitle={t.title} onClick={(newTitle) => updateTaskHandler(t.id, newTitle)}/>
                        <IconButton aria-label="delete"
                                    onClick={onClickHandler}
                        >
                            <DeleteIcon/>
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button variant={props.filter === "all" ? "outlined" : "text"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button variant={props.filter === "active" ? "outlined" : "text"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button variant={props.filter === "completed" ? "outlined" : "text"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}


