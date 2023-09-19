import React from 'react';
import './App.css';
import {Todolist} from "./Components/Todolist";

function App() {
    return (
        <div className="App">
            <Todolist title="My Todo"/>
            <Todolist title="Second"/>
            <Todolist title="Third"/>
        </div>
    );
}

export default App;
