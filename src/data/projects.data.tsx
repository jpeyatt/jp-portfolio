import { IProject } from '../models/project.model';

// Screenshot Imports
import img1 from '../assets/images/jp-portfolio-screenshot.png';

const ProjectsData: IProject[] = [
    {
        id: 1,
        title: 'Portfolio Site',
        description: 'I created my personal portfolio site with only React. My goal was to not rely on any external JavaScript libraries or CSS frameworks/design systems. As Front End Developers, we tend to lean heavily on these, as they are convenient and allow us to iterate through work more quickly. But with that comes the burden and responsibility to keep our skills dusted off for when we\'ll need them. This project was a reason to do just that for myself!',
        screenshot: img1,
        stack: ['React', 'TypeScript'],
        github_url: 'https://github.com/jpeyatt/jp-portfolio',
        demo_url: '/'
    },
];


export default ProjectsData;