import React, { FunctionComponent } from "react";
import SkillItem from './skill-item';
import '../styles/skills.css';
import { SkillsData } from '../data/skills.data';
import { ISkillItem } from "../models/skill-item.model";

const formSkills = (skillsData: ISkillItem[]): ISkillItem[][] => {
    const mid = Math.ceil(skillsData.length / 2);
    skillsData.sort((a,b) => b.percentage - a.percentage);
    const left = skillsData.slice(0, mid);
    const right = skillsData.slice(mid);

    return [left, right];
}

const Skills: FunctionComponent = () => {

    const [leftSkills, rightSkills] = formSkills(SkillsData);

    return (
        <section id="skills" className="portfolio-section skills-section">

            <div className="section-header">
                <h1>Skills</h1>
            </div>

            <div className="skills">

                <div className="skills-column skills-col-left">
                    {
                        leftSkills.map(skill => 
                            <SkillItem
                                key={skill.id}
                                skillName={skill.name} 
                                percentage={skill.percentage} 
                            />
                        )
                    }
                </div>

                <div className="skills-column skills-col-right">
                    {
                        rightSkills.map(skill => 
                            <SkillItem
                                key={skill.id}
                                skillName={skill.name} 
                                percentage={skill.percentage} 
                            />
                        )
                    }
                </div>
                
            </div>

        </section>
    );
}

export default Skills;
