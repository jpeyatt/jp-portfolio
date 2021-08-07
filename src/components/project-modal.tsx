import React, { useEffect, useRef } from "react";
import { FunctionComponent } from "react";
import '../styles/project-modal.css';

interface IProjectModalProps {
    show: boolean;
    onCloseCallback: () => void;
}
const ProjectModal: FunctionComponent<IProjectModalProps> = ({show, onCloseCallback}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const onCloseClick = () => {
        onCloseCallback();
    }

    useEffect(() => {
        show ? modalRef.current?.classList.add('show') : modalRef.current?.classList.remove('show');
    }, [show])

    return (
        <div ref={modalRef} className="modal-wrapper">
            <div className="project-details">

            <button onClick={onCloseClick}>CLOSE</button>
            </div>
        </div>
    );
};

export default ProjectModal;