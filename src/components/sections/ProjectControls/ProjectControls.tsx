import './ProjectControls.scss';

import React from 'react';
import {Link} from 'react-router-dom';

import arrowLeft from '../../../images/icons/arrow-left.svg'
import arrowRight from '../../../images/icons/arrow-right.svg'

type IProps = {
    nextProject: string;
    prevProject: string;
}

const ProjectControls: React.FC<IProps> = ({nextProject, prevProject}) => {
    return (
        <section className="project-controls borders">
            <Link to={`/portfolio/${prevProject.toLowerCase()}`} className="project-controls__previous">
                <img src={arrowLeft} alt="arrow left" className="project-controls__arrow"/>
                <div className="project-controls__text">
                    <h3 className="project-controls__title">{prevProject}</h3>
                    <p className="project-controls__direction">Previous Project</p>
                </div>
            </Link>
            <Link to={`/portfolio/${nextProject.toLowerCase()}`} className="project-controls__next">
                <img src={arrowRight} alt="arrow right" className="project-controls__arrow"/>
                <div className="project-controls__text">
                    <h3 className="project-controls__title">{nextProject}</h3>
                    <p className="project-controls__direction">Next Project</p>
                </div>
            </Link>
        </section>
    );
};

export default ProjectControls;
