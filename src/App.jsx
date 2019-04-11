import React, {Component} from 'react';
import './App.scss';

class App extends Component {
    skills = {
        frontend: ["React", "Redux", "HTML", "CSS3", "SASS", "JSON", "Async/Await"],
        backend: ["Java 8+", "Java spring", "NodeJS"],
    };

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
                <footer>
                    <a href="mailto:par.strandberg@gmail.com">par.strandberg@gmail.com</a>
                </footer>
            </div>
        );
    }
}

export default App;
