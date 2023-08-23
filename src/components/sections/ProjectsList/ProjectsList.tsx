import './ProjectList.scss';

import React from 'react';

import ItemPreview from '../../utils/ItemPreview/ItemPreview';

import {projectsData} from '../../../data/projects-data';

const ProjectsList: React.FC = () => {
    return (
        <section className="projects">
            {projectsData.map((project, index) => (
                <ItemPreview index={index+1} previewImage={project.previewImage} title={project.title} previewText={project.previewText} linkTo={project.linkTo} buttonText='View Project'/>
            ))}
        </section>
    );
};

export default ProjectsList;
