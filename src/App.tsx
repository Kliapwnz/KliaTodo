import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "What", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="My Todo" task={tasks}/>

        </div>
    );
}

export default App;
