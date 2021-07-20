import React, { FunctionComponent } from "react";
import '../styles/footer.css';

const Footer: FunctionComponent = () => {
    return (
        <footer id="contact" className="border-top">
            <div className="col-left">
                <div className="brand-logo-footer">
                    <a href="/">JP.</a>
                </div>
            </div>
            <div className="col-mid">
                <a href="https://www.linkedin.com/in/justinpeyatt" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn Icon" />
                </a>
                <a href="https://www.instagram.com/peyattj" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="/assets/images/icons/instagram.svg" alt="Instagram Icon" />
                </a>
                <a href="https://github.com/jpeyatt" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="/assets/images/icons/github.svg" alt="Github Icon" />
                </a>
                <a href="mailto:justinpeyatt@gmail.com" target="_blank" rel="noreferrer" className="social-icon">
                    <img src="/assets/images/icons/at-sign.svg" alt="Github Icon" />
                </a>
            </div>
            <div className="col-right">
                © 2021 Justin Peyatt
            </div>
        </footer>
    );
}
export default Footer;