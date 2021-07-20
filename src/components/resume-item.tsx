import React, { FunctionComponent, useEffect, useRef } from "react";

interface IResumeItemProps {
    dates: string;
    companyName: string;
    title: string;
    summary: string;
    responsibilities: string[];
}
const ResumeItem: FunctionComponent<IResumeItemProps> = ({dates, companyName, title, summary, responsibilities}) => {
    const resumeItemRef = useRef<HTMLDivElement>(null);

    const resumeItemInView = (el: HTMLDivElement | null): boolean => {
        if (el) {
            const elTop = el?.getBoundingClientRect().top;
            return (elTop <= (window.innerHeight || document.documentElement.clientHeight) / 1);
        } else {
            return false;
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (resumeItemInView(resumeItemRef.current)) {
                resumeItemRef.current?.classList.add('scrolled');
                window.removeEventListener('scroll', () => {});
            }
        });

        return () => {
            window.removeEventListener('scroll', () => {});
        }
        
    });

    return (
        <div ref={resumeItemRef} className="resume-item">
            <div className="left-col">
                <div className="dates">{dates}</div>
            </div>
            <div className="mid-col">
                <div className="bullet-point"></div>
                <div className="time-line"><div></div></div>
            </div>
            <div className="right-col">
                <div>
                    <div className="company-name">{companyName}</div>
                    <div className="dates">{dates}</div>
                </div>
                
                <div className="title">{title}</div>
                <div className="summary">{summary}</div>
                <ul className="responsibilities">
                    {
                        responsibilities.map((r) => <li>{r}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default ResumeItem;