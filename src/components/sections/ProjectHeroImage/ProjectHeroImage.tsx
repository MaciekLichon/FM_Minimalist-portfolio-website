import './ProjectHeroImage.scss';

import React from 'react';

import {IImages} from '../../../data/projects-data';

type IProps = {
    heroImage: IImages;
}

const ProjectHeroImage: React.FC<IProps> = ({heroImage}) => {
    return (
        <picture className="project-hero">
            <source media="(min-width:1024px)" srcSet={heroImage.desktop} />
            <source media="(min-width:768px)" srcSet={heroImage.tablet} />
            <img className="project-hero__image" src={heroImage.mobile} alt="hero" />
        </picture>
    );
};

export default ProjectHeroImage;
