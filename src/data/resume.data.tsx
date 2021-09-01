import { IResumeItem } from "../models/resume-item.model";

export const ResumeData: IResumeItem[] = [
  {
    id: "1",
    isCurrent: true,
    startDate: new Date(2019, 2, 1), // march 2019 - current
    endDate: new Date(),
    company: "CRITEO",
    title: "Front End Engineer",
    summary:
      "Develop tools that globally improve operational efficiency, supporting $230M quarterly RexT. As a member of the Global Automation team, responsible for identifying and communicating risks and issues to management and create action plans to mitigate risks.",
    responsibilities: [
      {
        id: "criteo2-a",
        text: "Work collaboratively in a cross-functional and agile team of designers, architects and developers",
      },
      {
        id: "criteo2-b",
        text: "Determine prioritization and scope of over 3,000 feature requests inputted by local teams",
      },
      {
        id: "criteo2-c",
        text: "Identify scalable and impactful local initiatives qualified for roadmap integration",
      },
      {
        id: "criteo2-d",
        text: "Leveraging knowledge of Angular/JS/Python Flask, develop web apps to enable efficiency and automation of 2,000+ users",
      },
      {
        id: "criteo2-e",
        text: "Design custom solutions in .NET/C# reducing product gap for users",
      },
    ],
  },
  {
    id: "2",
    company: "CRITEO",
    startDate: new Date(2015, 7, 1), // Aug 2015
    endDate: new Date(2019, 2, 1), // Mar 2019
    isCurrent: false,
    title: "Technical Solutions Engineer",
    summary:
      "Owned development of technical integration for Enterprise clients supporting $80M quarterly RexT. Maintaining up-to-date product knowledge leveraged in developing creative and customized solutions.",
    responsibilities: [
      {
        id: "criteo1-a",
        text: "Approached challenges with analytical mindset enabling development of innovative solutions",
      },
      {
        id: "criteo1-b",
        text: "Maintained deep understanding of products from a technical perspective while driving product innovation by creating short-term workarounds using JavaScript, .NET C# & Python",
      },
      {
        id: "criteo1-c",
        text: "Led internal initiatives supporting innovation and efficiency saving 100hrs/quarter",
      },
      {
        id: "criteo1-d",
        text: "Ensured customer satisfaction by troubleshooting client code, querying databases, analysis",
      },
      {
        id: "criteo1-e",
        text: "Developed cross-functional relationships communicating client needs to internal partners driving success and influencing product enhancements",
      },
      {
        id: "criteo1-f",
        text: "Evangelized new products and assisted clients in the integration and adoption of features to help ensure long-term campaign success and business growth",
      },
    ],
  },
  {
    id: "3",
    startDate: new Date(2014, 0, 1), // Jan 2014
    endDate: new Date(2015, 7, 1), // Aug 2015
    company: "SESCO Lighting",
    isCurrent: false,
    title: "Web Developer",
    summary:
      "Conducted development of web applications, reports, and special event SPAs in ASP.NET MVC & AngularJS",
    responsibilities: [
      {
        id: "sesco2-a",
        text: "SharePoint server administration and development",
      },
      {
        id: "sesco2-b",
        text: "Support expansion of technology evolution by documenting, on-boarding, and training all users",
      },
    ],
  },
  {
    id: "4",
    startDate: new Date(2009, 1, 1), // Feb 2009
    endDate: new Date(2014, 0, 1), // Jan 2014
    isCurrent: false,
    company: "SESCO Lighting",
    title: "IT Specialist",
    summary: "Provided direct support to users across the 200+ users in the organization",
    responsibilities: [
      {
        id: "sesco1-a",
        text: "Installed, maintained, and configured Microsoft systems",
      },
      { id: "sesco1-b", text: "Server and network administration" },
    ],
  },
];
