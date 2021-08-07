import React, { FunctionComponent } from "react";
import SkillItem from './skill-item';
import '../styles/skills.css';

const Skills: FunctionComponent = () => {
    return (
        <section id="skills" className="portfolio-section skills-section">

            <div className="section-header">
                <h1>Skills</h1>
            </div>

            <div className="skills">

                <div className="skills-column skills-col-left">
                    <SkillItem skillName="JavaScript" percentage={80} />
                    <SkillItem skillName="React" percentage={50} />
                    <SkillItem skillName="Python" percentage={30} />
                </div>

                <div className="skills-column skills-col-right">
                    <SkillItem skillName="Angular" percentage={75} />
                    <SkillItem skillName="CSS" percentage={65} />
                    <SkillItem skillName="C#" percentage={40} />
                </div>
                
            </div>

        </section>
    );
}

export default Skills;