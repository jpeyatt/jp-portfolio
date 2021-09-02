import React, { useEffect, useRef } from "react";
import { FunctionComponent } from "react";
import { IProject } from "../models/project.model";
import "../styles/project-modal.css";

interface IProjectModalProps {
  show: boolean;
  project: IProject | null;
  onCloseCallback: () => void;
}
const ProjectModal: FunctionComponent<IProjectModalProps> = ({
  project,
  show,
  onCloseCallback,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const onCloseClick = () => {
    onCloseCallback();
  };

  useEffect(() => {
    show
      ? modalRef.current?.classList.add("show")
      : modalRef.current?.classList.remove("show");
  }, [show]);

  return (
    <div ref={modalRef} className="modal-wrapper">
      <div className="project">
        <div className="project-header">
          <h2>{project?.title}</h2>
        </div>

        <div className="project-body">
          <div className="project-screenshot">
            <img src={project?.screenshot} alt="" />
          </div>

          <div className="project-details">
            <div>
              <h3>Stack/Technology Used</h3>
              <div className="project-stack">
                {project?.stack.map((item) => (
                  <span key={item.trim().toLowerCase()}>{item}</span>
                ))}
              </div>

              <div className="project-description">{project?.description}</div>
            </div>

            <div className="project-urls">
              <a href={project?.github_url} target="_blank" rel="noreferrer">
                Github
              </a>
              <a href={project?.demo_url} target="_blank" rel="noreferrer">
                See Live
              </a>
            </div>
          </div>
        </div>

        <div className="project-footer">
          <div className="project-close-btn-row">
            <button onClick={onCloseClick}>CLOSE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
