import React, { FunctionComponent, useEffect, useRef } from "react";
import { IResumeItem } from '../models/resume-item.model';

const formatDates = (startDate: Date, endDate: Date, isCurrent: boolean): string => {
    const start = `${startDate.toLocaleString('en-us', { month: 'long' })} ${startDate.getFullYear()}`;
    const end = isCurrent ? 'Current' : `${endDate.toLocaleString('en-us', { month: 'long' })} ${endDate.getFullYear()}`;
    return `${start} - ${end}`;
};

const ResumeItem: FunctionComponent<IResumeItem> = ({startDate, endDate, isCurrent, company, title, summary, responsibilities}) => {
    const resumeItemRef = useRef<HTMLDivElement>(null);
    let dates = formatDates(startDate, endDate, isCurrent);
    console.log(dates)

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
        
    }, [startDate, endDate]);

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
                    <div className="company-name">{company}</div>
                    <div className="dates">{dates}</div>
                </div>
                
                <div className="title">{title}</div>
                <div className="summary">{summary}</div>
                <ul className="responsibilities">
                    {
                        responsibilities.map((r) => <li key={r.id}>{r.text}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};



export default ResumeItem;