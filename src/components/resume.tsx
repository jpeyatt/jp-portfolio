import React, { FunctionComponent } from "react";
import '../styles/resume.css';
import ResumeItem from "./resume-item";

const Resume: FunctionComponent = () => {

    return (
        <section id="resume" className="portfolio-section resume-section">

            <div className="section-header">
                <h1>Resume</h1>
            </div>

            <ResumeItem
                dates="Mar 2019 - Current"
                companyName="CRITEO"
                title="Front End Engineer"
                summary="Develop tools that globally improve operational efficiency, supporting $230M quarterly RexT. As a member of the Global Automation team, responsible for identifying and communicating risks and issues to management and create action plans to mitigate risks."
                responsibilities={[
                    {key: 'criteo2-a', text: 'Work collaboratively in a cross-functional and agile team of designers, architects and developers'},
                    {key: 'criteo2-b', text: 'Determine prioritization and scope of over 3,000 feature requests inputted by local teams'},
                    {key: 'criteo2-c', text: 'Identify scalable and impactful local initiatives qualified for roadmap integration'},
                    {key: 'criteo2-d', text: 'Leveraging knowledge of Angular/JS/Python Flask, develop web apps to enable efficiency and automation of 2,000+ users'},
                    {key: 'criteo2-e', text: 'Design custom solutions in .NET/C# reducing product gap for users'}
                ]}
            />

            <ResumeItem
                dates="Aug 2015 - Mar 2019"
                companyName="CRITEO"
                title="Technical Solutions Engineer"
                summary="Owned development of technical integration for Enterprise clients supporting $80M quarterly RexT. Maintaining up-to-date product knowledge leveraged in developing creative and customized solutions."
                responsibilities={[
                    {key: 'criteo1-a', text: 'Approached challenges with analytical mindset enabling development of innovative solutions'},
                    {key: 'criteo1-b', text: 'Maintained deep understanding of products from a technical perspective while driving product innovation by creating short-term workarounds using JavaScript, .NET C# & Python'},
                    {key: 'criteo1-c', text: 'Led internal initiatives supporting innovation and efficiency saving 100hrs/quarter'},
                    {key: 'criteo1-d', text: 'Ensured customer satisfaction by troubleshooting client code, querying databases, analysis'},
                    {key: 'criteo1-e', text: 'Developed cross-functional relationships communicating client needs to internal partners driving success and influencing product enhancements'},
                    {key: 'criteo1-f', text: 'Evangelized new products and assisted clients in the integration and adoption of features to help ensure long-term campaign success and business growth'}
                ]}
            />

            <ResumeItem
                dates="Jan 2014 - Aug 2015"
                companyName="SESCO Lighting"
                title="Web Developer"
                summary="Conducted development of web applications, reports, and special event SPAs in ASP.NET MVC & AngularJS"
                responsibilities={[
                    {key: 'sesco2-a', text: 'SharePoint server administration and development'},
                    {key: 'sesco2-b', text: 'Support expansion of technology evolution by documenting, on-boarding, and training all users'}
                ]}
            />

            <ResumeItem
                dates="Feb 2009 - Jan 2014"
                companyName="SESCO Lighting"
                title="IT Specialist"
                summary="Provided direct support to users across the 200+ users in the organization"
                responsibilities={[
                    {key: 'sesco1-a', text: 'Installed, maintained, and configured Microsoft systems'},
                    {key: 'sesco1-b', text: 'Server and network administration'}
                ]}
            />

        </section>
    );
}

export default Resume;