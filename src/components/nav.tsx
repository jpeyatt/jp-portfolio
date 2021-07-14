import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import '../styles/nav.css';

const Nav: FunctionComponent = () => {
    const [navClass, setNavClass] = useState('at-top');
    // const mobileMenuBtnRef = document.querySelector('#mobile-menu-button');
    const linksRef = useRef<HTMLButtonElement>(null);
    const mobileMenuBtnRef = useRef<HTMLUListElement>(null);

    const handleScroll = () => {
        if (window.scrollY > 80) setNavClass('not-at-top');
        else setNavClass('at-top');
    }

    const onMenuBtnClick = () => {
        const linksEl = linksRef.current;
        const mobileMenuBtnEl = mobileMenuBtnRef.current;
        if (mobileMenuBtnEl?.classList.contains('open')) {
            mobileMenuBtnEl?.classList.remove('open');
            linksEl?.classList.remove('open');
        } else {
            mobileMenuBtnEl?.classList.add('open');
            linksEl?.classList.add('open');
        }
    }

    useEffect(() => {
        const linksEl = linksRef.current;
        window.addEventListener('scroll', handleScroll, true);
        if (linksEl) linksEl.addEventListener('click', onMenuBtnClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (linksEl) linksEl.removeEventListener('click', onMenuBtnClick);
        };
    }, []);

    return (
        <nav className={navClass}>
            <ul className="brand-logo">
                <li>JP.</li>
            </ul>
            <button ref={linksRef} id="mobile-menu-button" className="mobile-menu">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>
            <ul ref={mobileMenuBtnRef} id="links" className="links">
                <li><a href="/">About Me</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Resume</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Nav;