import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import "../styles/skills.css";

interface ISkillTypeProps {
    skillName: string;
    percentage: number;
}
const SkillItem: FunctionComponent<ISkillTypeProps> = ({ skillName, percentage }) => {
    const [loadedWidth, setLoadedWidth] = useState(0);
    const loadedInnerRef = useRef<HTMLDivElement>(null);



    const skillInView = (el: HTMLDivElement | null): boolean => {
        if (el) {
            const elTop = el?.getBoundingClientRect().top;
            return (elTop <= (window.innerHeight || document.documentElement.clientHeight) / 1);
        } else {
            return false;
        }
    }

    useEffect(() => {
        setLoadedWidth(percentage);

        window.addEventListener('scroll', () => {
            if (skillInView(loadedInnerRef.current)) {
                loadedInnerRef.current?.classList.add('loaded-inner');
                window.removeEventListener('scroll', () => {});
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {});
        }
        
    }, [percentage]);

    return (
        <div className="skill">
            <div className="skill-name">{skillName}</div>
            <div className="load-bar">
                <div style={{width: loadedWidth + '%'}} className="loaded">
                    <div ref={loadedInnerRef}></div>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;
