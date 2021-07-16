import React, { FunctionComponent, useEffect, useRef } from "react";
import "../styles/nav.css";

const Nav: FunctionComponent = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLButtonElement>(null);
    const mobileMenuBtnRef = useRef<HTMLUListElement>(null);
    const openOverelayRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const navEl = navRef.current;
        if (window.scrollY > 80) {
            navEl?.classList.add("not-at-top");
            navEl?.classList.remove("at-top");
        } else {
            navEl?.classList.remove("not-at-top");
            navEl?.classList.add("at-top");
        }
    };

    const onNavLinkClick = () => {
        const mobileMenuBtnEl = mobileMenuBtnRef.current;
        if (mobileMenuBtnEl?.classList.contains("open")) onMenuBtnClick();
    };

    const onMenuBtnClick = () => {
        const linksEl = linksRef.current;
        const mobileMenuBtnEl = mobileMenuBtnRef.current;
        const openOverelayEl = openOverelayRef.current;
        const navEl = navRef.current;

        if (mobileMenuBtnEl?.classList.contains("open")) {
            mobileMenuBtnEl?.classList.remove("open");
            linksEl?.classList.remove("open");
            openOverelayEl?.classList.remove("open");
            navEl?.classList.remove("mobile-open");
        } else {
            mobileMenuBtnEl?.classList.add("open");
            linksEl?.classList.add("open");
            openOverelayEl?.classList.add("open");
            navEl?.classList.add("mobile-open");
        }
    };

    useEffect(() => {
        const linksEl = linksRef.current;
        window.addEventListener("scroll", handleScroll, true);
            
        if (linksEl) linksEl.addEventListener("click", onMenuBtnClick);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (linksEl) linksEl.removeEventListener("click", onMenuBtnClick);
        };
    }, []);

    return (
        <nav ref={navRef} className="at-top">
            <ul className="brand-logo">
                <li>JP.</li>
            </ul>
            <button ref={linksRef} id="mobile-menu-button" className="mobile-menu">
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
                <div className="hamburger-line"></div>
            </button>
            <div ref={openOverelayRef} className="open-mobile-menu-overlay"></div>
            <ul ref={mobileMenuBtnRef} id="links" className="links">
                <li>
                    <a onClick={onNavLinkClick} href="#portfolio-header">About Me</a>
                </li>
                <li>
                    <a onClick={onNavLinkClick} href="#skills">Skills</a>
                </li>
                <li>
                    <a onClick={onNavLinkClick} href="/">Resume</a>
                </li>
                <li>
                    <a onClick={onNavLinkClick} href="/">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
