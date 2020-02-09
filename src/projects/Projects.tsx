import React from 'react';
import './Projects.scss';

function Projects() {
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

    return (
        <div className="Projects">
            <section className="container">
                <div className="project-container">
                        <img src={require('./../assets/projects/dwco.png')} alt={games[1].name}/>
                        <img src={require('./../assets/projects/hands.png')} alt={games[0].name}/>
                </div>
            </section>
        </div>
    );
}

export default Projects;
