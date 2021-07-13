import React, { FunctionComponent } from "react";
import '../styles/footer.css';

const Footer: FunctionComponent = () => {
    return (
        <footer className="border-top">
            <div className="col-left">
                Column Left
            </div>
            <div className="col-mid">
                Column Middle
            </div>
            <div className="col-right">
                Column Right
            </div>
        </footer>
    );
}
export default Footer;