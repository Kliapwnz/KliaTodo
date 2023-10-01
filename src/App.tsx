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
    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })


    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(el => el.id === todolistId ? {...el, filter: value} : el))
    }

    function removeTask(id: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== id)})
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
    }

    function changeTaskStatus(todolistId: string, id: string, isDone: boolean) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(el => el.id === id ? {...el, isDone: isDone} : el)})
    }

    function removeTodolist(todolistId: string) {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]
    }

    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id]
                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(el => el.isDone === false)
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(el => el.isDone === true)
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
                        removeTodolist={removeTodolist}
                    />
                )
            })}


        </div>
    );
}

export default App;
