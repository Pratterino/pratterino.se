import React from 'react';
import About from '../about/About';
import Work from "../work/Work";
import Projects from "../projects/Projects";
import './App.scss';

interface ISkill {
    frontend: Array<string>
    backend: Array<string>
}

function App() {
    return [
        <About/>,
        <Work/>,
    ];
}

export default App;
