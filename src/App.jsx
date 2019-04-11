import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    skills = {
        frontend: ["React", "Redux", "HTML", "CSS3", "SASS", "Async/Await"],
        backend: ["Java 11", "Java Spring 2", "NodeJS"],
    };

    games = [{
        name: "Hitta Pärs händer!",
        link: "/games/hands",
    }, {
        name: "Dwarven Conflicts",
        link: "https://shieldwebdev.com/dwacon.html",
    }, {
        name: "Safaristaden",
        link: "/games/safari",
    }];

    renderSkill(skill) {
        return this.skills[skill].map(skill => (
            <div className="skill">{`#${skill}`}</div>
        ));
    }

    render() {
        return (
            <div className="App">
                <div className="pratterino-image"/>
                <div className="content">
                    <h1>Pär Strandberg</h1>
                    {this.renderSkill("frontend")}
                    <br/>
                    {this.renderSkill("backend")}
                </div>

                <div className="description">Jag är en systemutvecklare med främre inriktning mot frontend.
                    Har erfarenheter från en rad olika ramverk såsom React, Redux, Backbone och NodeJS.
                    Jag jobbar testdrivet och har bland annat erfarenhet inom testramverk såsom: Jest, Enzyme, Jasmine, och Sanity.<br/><br/>
                    Det är viktigt att teamet diskuterar kod och känner ett gemensamt ägarskap.<br/>
                    Som en konsekvens av detta har han därför varit med och tagit fram <a href={"https://mobtimer.com/"}>mobtimer.com</a> som underlättar arbetet för team att genomföra mobbprogrammering.</div>

                <div className="games-container">
                    <h4>Games</h4>
                    {this.games.map(game => {
                        return (
                            <a className="game" href={game.link}>{game.name}</a>
                        )
                    })}
                </div>
                <footer>
                    <a href="mailto:par.strandberg@gmail.com">par.strandberg@gmail.com</a>
                </footer>
            </div>
        );
    }
}

export default App;
