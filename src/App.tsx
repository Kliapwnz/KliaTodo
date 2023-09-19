import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "What", isDone: false}
    ])
    let [filter, setFilter] = useState<"all" | "completed" | "active">("all")

    let tasksForTodolist = tasks
    if (filter === "active") {
        tasksForTodolist = tasks.filter(el => el.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(el => el.isDone === true)
    }

    function removeTask(id: number) {
        let FilteredTasks = tasks.filter(el => el.id != id)
        setTasks(FilteredTasks)

    }

    return (
        <div className="App">
            <Todolist title="My Todo"
                      task={tasksForTodolist}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
