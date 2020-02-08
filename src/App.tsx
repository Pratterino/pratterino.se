import React from 'react';
import './App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

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

    return (
        <div className="App">
            <section>
                <div className="image"/>
            </section>
            <section className="content">
                <header>Pär Strandberg</header>
                <div>Jag är en utvecklare med främst inriktning mot frontend.
                    Har mycket erfarenheter med en rad olika ramverk såsom: React, Redux, NodeJS.
                    Jag jobbar testdrivet och har bland annat erfarenhet inom testramverk såsom: Jest, Enzyme, Jasmine,
                    och
                    Sanity.<br/><br/>
                    Det är viktigt att teamet diskuterar kod och känner ett gemensamt ägarskap.<br/>
                    Som en konsekvens av detta har han därför varit med och tagit fram <a
                        href={"https://mobtimer.com/"}>mobtimer.com</a> som underlättar arbetet för team att genomföra
                    mobbprogrammering.
                </div>
                <footer>
                    <a href="https://github.com/Pratterino/"><FontAwesomeIcon icon={faGithub}/> Github</a>
                    <a href="https://www.linkedin.com/in/p%C3%A4r-strandberg-271309185/"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                </footer>
            </section>
        </div>
    );
}

export default App;
