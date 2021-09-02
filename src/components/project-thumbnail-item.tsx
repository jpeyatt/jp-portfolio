import React, {FunctionComponent} from 'react';
import { IProject } from '../models/project.model';
import '../styles/project-thumbnail-item.css';

interface IProjectThumbnailItem {
    project: IProject;
    onProjectSelect: Function;
}
const ProjectThumbnailItem: FunctionComponent<IProjectThumbnailItem> = ({project, onProjectSelect}) => {

  return (
    <div className="project-thumbnail">
      <h2>{project.title}</h2>
      <img onClick={() => onProjectSelect(project.id)} src={project.screenshot} alt={project.title} />
    </div>
  );
};


export default ProjectThumbnailItem;
