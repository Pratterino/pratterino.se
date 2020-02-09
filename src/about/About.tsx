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
                    <div>Jag är en utvecklare med främst inriktning mot frontend.<br/>
                        Kolla in <a
                            href={"https://mobtimer.com/"}>mobtimer.com</a> för en timer som underlättar arbetet för team att genomföra mobbprogrammering.
                    </div>
                    <footer>
                        <a target="_blank" href="https://github.com/Pratterino/"><FontAwesomeIcon
                            icon={faGithub}/> Github</a>
                        <a target="_blank"
                           href="https://www.linkedin.com/in/p%C3%A4r-strandberg-271309185/"><FontAwesomeIcon
                            icon={faLinkedin}/> LinkedIn</a> /
                        <a target="_blank" href="https://instagram.com/pratterino"><FontAwesomeIcon
                            icon={faInstagram}/> Instagram</a>
                        <a target="_blank" href="https://pratterino.bandcamp.com/"><FontAwesomeIcon
                            icon={faBandcamp}/> Bandcamp</a>
                        <a target="_blank" href="https://soundcloud.com/pratterino/"><FontAwesomeIcon
                            icon={faBandcamp}/> Soundcloud</a>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default About;
