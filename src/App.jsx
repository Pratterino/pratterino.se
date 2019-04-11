import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    skills = {
        frontend: ["React", "Redux", "HTML", "CSS3", "SASS", "Async/Await"],
        backend: ["Java 8+", "Java Spring", "NodeJS"],
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
