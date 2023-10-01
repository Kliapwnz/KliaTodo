import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed"
type TodolistsType = {
    id: string,
    title: string
    filter: FilterValuesType
}

function App() {
    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
            {id: v1(), title: "What to learn", filter: "all"},
            {id: v1(), title: "What to buy", filter: "completed"}
        ]
    )
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "What", isDone: false}
    ],)

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }

    function removeTask(id: string) {
        let FilteredTasks = tasks.filter(el => el.id != id)
        setTasks(FilteredTasks)

    }

    function addTask(title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks]
        setTasks(newTasks)
    }

    function changeTaskStatus(id: string, isDone: boolean) {
        let task = tasks.find(el => el.id === id)
        if (task) {
            task.isDone = isDone;
            setTasks([...tasks])
        }
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks
                if (el.filter === "active") {
                    tasksForTodolist = tasks.filter(el => el.isDone === false)
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks.filter(el => el.isDone === true)
                }
                return (
                    <Todolist
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        task={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={el.filter}
                    />
                )
            })}


        </div>
    );
}

export default App;
