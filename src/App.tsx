import React from 'react';
import About from './About';
import Work from "./Work";
import './App.scss';

interface ISkill {
    frontend: Array<string>
    backend: Array<string>
}

function App() {
    const skills: ISkill = {
        frontend: ["React", "Redux", "HTML", "CSS3", "SASS", "Async/Await"],
        backend: ["Java 11", "Java Spring 2", "NodeJS"],
    };

    const games = [{
        name: "Hitta Pärs händer!",
        link: "/games/hands",
    }, {
        name: "Dwarven Conflicts",
        link: "https://shieldwebdev.com/dwacon.html",
    }, {
        name: "Safaristaden",
        link: "/games/safari",
    }];

    const renderSkill = (skill: 'frontend' | 'backend'): React.ReactElement[] =>
        skills[skill].map((_skill: string) => (
            <div className="skill">{`#${_skill}`}</div>
        ));

    return [
        <About/>,
        <Work/>
    ];
}

export default App;
