import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBandcamp, faGithub, faInstagram, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './About.scss';

function About() {
    return (
        <div className="About">
            <section className="left">
                <div className="image"/>
                <div className="image-overlay"/>
            </section>
            <section className="right">
                <div>
                    <div className="content">
                        <header>Pär Strandberg</header>
                        <ol>
                            <li>Föddes i Umeå.</li>
                            <li>Gick IT-Mediaprogrammet på John Bauergymnasiet i Umeå. (2006-2009)</li>
                            <li>Startade upp och arbetade i Servicedisken på Dragonskolans gymnasium, städade på
                                Norrlandsoperan.
                            </li>
                            <li>Flyttade till Växjö och gick Interaktiva digitala medier på Linnéuniversitetet.
                                (2011-2014)
                            </li>
                            <li>Cyklade hem från Växjö till Umeå. (2012)</li>
                            <li>Studerade en utbytestermin i Cork, Irland. (HT2013)</li>
                            <li>Började på Cygni och deras talangprogram. (november 2014)</li>
                            <li>Blev färdig med talangprogrammet. (2017)</li>
                            <li>Jobbat på uppdrag som Cygni-konsult hos bland annat: Com hem, Eniro, Telia.</li>
                            <li>Gillar att hålla på med improvisationsteater, brygga öl, och spela instrument.</li>
                        </ol>
                    </div>
                    <hr/>
                    <div className="content">
                        <p>Jag är en utvecklare med främst inriktning mot frontend.</p>
                        <p>Kolla in <a
                            href="https://mobtimer.com/">mobtimer.com</a> för en timer som underlättar arbetet för
                            team att genomföra mobbprogrammering.</p>
                    </div>
                    <footer>
                        <div className="footer__group">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://github.com/Pratterino/"><FontAwesomeIcon
                                icon={faGithub}/>Github</a>
                            <a target="_blank"
                               rel="noopener noreferrer"
                               href="https://www.linkedin.com/in/p%C3%A4r-strandberg-271309185/"><FontAwesomeIcon
                                icon={faLinkedin}/>LinkedIn</a>/
                        </div>
                        <div className="footer__group">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://instagram.com/pratterino"><FontAwesomeIcon
                                icon={faInstagram}/>Instagram</a>
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://youtube.com/tachiokuling/"><FontAwesomeIcon
                                icon={faYoutube}/>YouTube</a>/
                        </div>
                        <div className="footer__group">
                            <a target="_blank" rel="noopener noreferrer"
                               href="https://pratterino.bandcamp.com/"><FontAwesomeIcon
                                icon={faBandcamp}/>Bandcamp</a>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default About;
