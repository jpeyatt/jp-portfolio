import React, { FunctionComponent } from "react";
import '../styles/resume.css';
import ResumeItem from "./resume-item";

const Resume: FunctionComponent = () => {

    return (
        <section id="resume" className="resume-section border-top">

            <div className="resume-header">
                <h2 className="section-header">Resume</h2>
            </div>

            <ResumeItem
                dates="Mar 2019 - Current"
                companyName="CRITEO"
                title="Front End Engineer"
                summary="Develop tools that globally improve operational efficiency, supporting $230M quarterly RexT. As a member of the Global Automation team, responsible for identifying and communicating risks and issues to management and create action plans to mitigate risks."
                responsibilities={[
                    'Work collaboratively in a cross-functional and agile team of designers, architects and developers',
                    'Determine prioritization and scope of over 3,000 feature requests inputted by local teams',
                    'Identify scalable and impactful local initiatives qualified for roadmap integration',
                    'Leveraging knowledge of Angular/JS/Python Flask, develop web apps to enable efficiency and automation of 2,000+ users',
                    'Design custom solutions in .NET/C# reducing product gap for users'
                ]}
            />

            <ResumeItem
                dates="Aug 2015 - Mar 2019"
                companyName="CRITEO"
                title="Technical Solutions Engineer"
                summary="Owned development of technical integration for Enterprise clients supporting $80M quarterly RexT. Maintaining up-to-date product knowledge leveraged in developing creative and customized solutions."
                responsibilities={[
                    'Approached challenges with analytical mindset enabling development of innovative solutions',
                    'Maintained deep understanding of products from a technical perspective while driving product innovation by creating short-term workarounds using JavaScript, .NET C# & Python',
                    'Led internal initiatives supporting innovation and efficiency saving 100hrs/quarter',
                    'Ensured customer satisfaction by troubleshooting client code, querying databases, analysis',
                    'Developed cross-functional relationships communicating client needs to internal partners driving success and influencing product enhancements',
                    'Evangelized new products and assisted clients in the integration and adoption of features to help ensure long-term campaign success and business growth'
                ]}
            />

            <ResumeItem
                dates="Jan 2014 - Aug 2015"
                companyName="SESCO Lighting"
                title="Web Developer"
                summary="Conducted development of web applications, reports, and special event SPAs in ASP.NET MVC & AngularJS"
                responsibilities={[
                    'SharePoint server administration and development',
                    'Support expansion of technology evolution by documenting, on-boarding, and training all users'
                ]}
            />

            <ResumeItem
                dates="Feb 2009 - Jan 2014"
                companyName="SESCO Lighting"
                title="IT Specialist"
                summary="Provided direct support to users across the 200+ users in the organization"
                responsibilities={[
                    'Installed, maintained, and configured Microsoft systems',
                    'Server and network administration'
                ]}
            />

        </section>
    );
}

export default Resume;