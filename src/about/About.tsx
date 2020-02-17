import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBandcamp, faGithub, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './About.scss';

function About() {
    return (
        <div className="About">
            <section>
                <div className="image"/>
            </section>
            <section className="content">
                <div>
                    <header>Pär Strandberg</header>
                    <div><p>Jag är en utvecklare med främst inriktning mot frontend.</p>
                        <p>Kolla in <a
                            href="https://mobtimer.com/">mobtimer.com</a> för en timer som underlättar arbetet för
                            team att genomföra mobbprogrammering.</p>
                    </div>
                    <footer>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://github.com/Pratterino/"><FontAwesomeIcon
                            icon={faGithub}/>Github</a>
                        <a target="_blank"
                           rel="noopener noreferrer"
                           href="https://www.linkedin.com/in/p%C3%A4r-strandberg-271309185/"><FontAwesomeIcon
                            icon={faLinkedin}/>LinkedIn</a> /
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://instagram.com/pratterino"><FontAwesomeIcon
                            icon={faInstagram}/>Instagram</a>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://pratterino.bandcamp.com/"><FontAwesomeIcon
                            icon={faBandcamp}/>Bandcamp</a>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://soundcloud.com/pratterino/"><FontAwesomeIcon
                            icon={faBandcamp}/>Soundcloud</a>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default About;
