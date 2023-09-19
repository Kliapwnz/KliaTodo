import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    const tasks1 = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 3, title: "What", isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: "Hello world", isDone: true},
        {id: 2, title: "I am Happy", isDone: false},
        {id: 3, title: "Yo", isDone: false}
    ]
    const tasks3 = [
        {id: 1, title: "we play football", isDone: true},
        {id: 2, title: "Man City", isDone: false},
        {id: 3, title: "Champions", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="My Todo" task={tasks1}/>
            <Todolist title="Second" task={tasks2}/>
            <Todolist title="Third" task={tasks3}/>
        </div>
    );
}

export default App;
