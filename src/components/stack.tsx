import React, { FunctionComponent } from "react";
import '../styles/stack.css';

const Stack: FunctionComponent = () => {
    return (
        <div className="stack-wrapper border-top">
            <h2 className="section-header">Skills</h2>

            <div className="logos">
            <div className="logo js" />
            <div className="logo react" />
            <div className="logo nodejs" />
            <div className="logo jest" />
            <div className="logo angular" />
            </div>
            
        </div>
    );
}

export default Stack;