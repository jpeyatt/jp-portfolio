import { FunctionComponent, useState } from "react";
import { IProject, NullProject } from "../models/project.model";
import '../styles/projects.css';
import ProjectModal from "./project-modal";
import ProjectsData from '../data/projects.data';
import ProjectThumbnailItem from './project-thumbnail-item';

const Projects: FunctionComponent = () => {
    const [showProjectModal, setShowProjectModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<IProject>(NullProject);
    
    const projectClickHandler = (projectId: number) => {
        if (!showProjectModal) setSelectedProject(ProjectsData.find(p => p.id === projectId)!);
        setShowProjectModal(!showProjectModal);
    };

    const closeHandler = () => {
        setShowProjectModal(!showProjectModal);
    };

    return (
        <section  id="projects" className="portfolio-section light projects-section">
            <div className="section-header">
                <h1>Projects</h1>
            </div>
            <div className="project-thumbnails">
                {
                    ProjectsData.map(project => 
                        <ProjectThumbnailItem
                            key={project.id}
                            project={project}
                            onProjectSelect={projectClickHandler} 
                        />
                    )
                }
            </div>
            <p style={{textAlign: "center", padding: 16}}>More coming soon!</p>
            <ProjectModal
                project={selectedProject ? selectedProject : null}
                show={showProjectModal}
                onCloseCallback={closeHandler}
            />
        </section>
    );
}

export default Projects;