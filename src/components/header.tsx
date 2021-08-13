import React from 'react';
import '../styles/header.css';
import '../styles/header-stars-bg.css';
import { FunctionComponent } from 'react';
import Typer from './typer';


const Header: FunctionComponent = () => {
    const titles = [
        'Front End Engineer.',
        'Competitive Latte Sipper.',
        'JavaScript Developer.'
    ];

    return (
        <header id="portfolio-header">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="header-content border-bottom">
                <h1>Hi, I'm Justin.</h1>
                <h4>I'm a <Typer
                    textSets={titles}
                    typeSpeed={200}
                    delSpeed={100}
                    pause={1800}
                    repeat={1} /> <span className="blinking-cursor">|</span>
                </h4>
            </div>
        </header>
    );
}

export default Header;