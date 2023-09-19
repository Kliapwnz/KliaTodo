import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    let tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "What", isDone: false}
    ]
    function removeTask(id:number) {
        tasks = tasks.filter(el => el.id != id)
        console.log(tasks)

    }

    return (
        <div className="App">
            <Todolist title="My Todo"
                      task={tasks}
                      removeTask={removeTask}
            />

        </div>
    );
}

export default App;
