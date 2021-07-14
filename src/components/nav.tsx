import React, { FunctionComponent, useEffect, useState } from "react";
import '../styles/nav.css';

const Nav: FunctionComponent = () => {
    const [navClass, setNavClass] = useState('at-top');
    const mobileMenuBtnEl = document.querySelector('#mobile-menu-button');
    const linksEl = document.querySelector('#links');

    const handleScroll = () => {
        if (window.scrollY > 80) setNavClass('not-at-top');
        else setNavClass('at-top');
    }

    const onMenuBtnClick = () => {
        if (mobileMenuBtnEl?.classList.contains('open')) {
            mobileMenuBtnEl?.classList.remove('open');
            linksEl?.classList.remove('open');
        } else {
            mobileMenuBtnEl?.classList.add('open');
            linksEl?.classList.add('open');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    return (
        <nav className={navClass}>
            <ul className="brand-logo">
                <li>JP.</li>
            </ul>
            <button id="mobile-menu-button" onClick={onMenuBtnClick} className="mobile-menu">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>
            <ul id="links" className="links">
                <li><a href="/">About Me</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;