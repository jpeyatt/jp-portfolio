import React, { FunctionComponent, useEffect, useState } from "react";
import "../styles/skills.css";

interface ISkillTypeProps {
    skillName: string;
    percentage: number;
}
const SkillItem: FunctionComponent<ISkillTypeProps> = ({ skillName, percentage }) => {
    const [loadedWidth, setLoadedWidth] = useState(0);

    useEffect(() => {
        setLoadedWidth(percentage)
    }, []);

    return (
        <div className="skill">
            <div className="skill-name">{skillName}</div>
            <div className="load-bar">
                <div style={{width: loadedWidth + '%'}} className="loaded frontend"></div>
            </div>
        </div>
    );
};

export default SkillItem;
