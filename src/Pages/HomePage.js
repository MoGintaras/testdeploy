import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Gintaras Motuzas</span>
                </h1>
                <p className="h-sub-text">

                    I am an full stack developer. I have experience in back end ,front end and Database development. Recently i have started my hands on web technologies e.g. Angular, node.js, react etc along with expanding my tech horizon into Javascript. Here you can see my tech projects.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/gintaras.motuzas/" target="_blank"  className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </a>
                    <a href="https://github.com/MoGintaras" target="_blank"  className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    <a href="https://www.instagram.com/mogintaras/" target="_blank"  className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon yt"/>
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
