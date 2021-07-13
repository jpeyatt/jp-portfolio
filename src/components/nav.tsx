import React, { FunctionComponent, useEffect, useState } from "react";
import '../styles/nav.css';

const Nav: FunctionComponent = () => {
    const [navClass, setNavClass] = useState('at-top');

    const handleScroll = () => {
        if (window.scrollY > 80) setNavClass('not-at-top');
        else setNavClass('at-top');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
    }, []);

    return (
        <nav className={navClass}>
            <ul className="brand-logo">
                <li>JP.</li>
            </ul>
            <ul className="link-wrap">
                <li><a href="/">About Me</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;