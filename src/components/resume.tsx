import React, { FunctionComponent } from "react";
import '../styles/resume.css';
import { ResumeData } from "../data/resume.data";
import ResumeItem from "./resume-item";


const Resume: FunctionComponent = () => {

    return (
        <section id="resume" className="portfolio-section resume-section">

            <div className="section-header">
                <h1>Resume</h1>
            </div>

            {
                ResumeData.map((resumeItem) => <ResumeItem 
                        key={resumeItem.id}
                        id={resumeItem.id}
                        startDate={resumeItem.startDate} 
                        endDate={resumeItem.endDate}
                        isCurrent={resumeItem.isCurrent}
                        company={resumeItem.company}
                        title={resumeItem.title}
                        summary={resumeItem.summary}
                        responsibilities={resumeItem.responsibilities}
                    />
                )
            }

        </section>
    );
}

export default Resume;