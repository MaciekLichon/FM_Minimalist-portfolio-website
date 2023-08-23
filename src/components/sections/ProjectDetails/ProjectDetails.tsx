import './ProjectDetails.scss';

import React from 'react';
import ButtonSecondary from '../../utils/ButtonSecondary/ButtonSecondary';

type IProps = {
    title: string;
    previewText: string;
    projectAreas: string[];
    projectTechnologies: string[];
}

const ProjectDetails: React.FC<IProps> = ({title, previewText, projectAreas, projectTechnologies}) => {

    const joinArray = (items: string[]) => items.join(' / ');

    return (
        <div className="project-details borders">
            <h2 className="project-details__title">{title}</h2>
            <p className="project-details__text">{previewText}</p>
            <div className="project-details__technical">
                <p className="project-details__areas">{joinArray(projectAreas)}</p>
                <p className="project-details__technologies">{joinArray(projectTechnologies)}</p>
            </div>
            <ButtonSecondary text='Visit website' to='' additionalClass='project-details__btn' />
        </div>
    );
};

export default ProjectDetails;
