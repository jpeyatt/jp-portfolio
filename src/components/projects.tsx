import { FunctionComponent, useState } from "react";
import '../styles/projects.css';
import ProjectModal from "./project-modal";

const Projects: FunctionComponent = () => {
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false)
    
    const projectClickHandler = () => {
        setShowProjectModal(!showProjectModal);
    };

    return (
        <section  id="projects" className="portfolio-section light projects-section">
            <div className="section-header">
                <h1>Projects</h1>
                <p>Coming Soon!</p>
                {/* <button onClick={projectClickHandler}>Project</button> */}
            </div>
        <ProjectModal 
            show={showProjectModal}
            onCloseCallback={projectClickHandler}
        />
        </section>
    );
}

export default Projects;