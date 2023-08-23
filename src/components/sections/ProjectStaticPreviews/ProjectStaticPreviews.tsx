import './ProjectStaticPreviews.scss';

import React from 'react';

import {IImages} from '../../../data/projects-data';

type IProps = {
    staticImages: IImages[];
}

const ProjectStaticPreviews: React.FC<IProps> = ({staticImages}) => {
    return (
        <div className="project-previews">
            <h3 className="project-previews__title">Static Previews</h3>
            <div className="project-previews__images">
                {staticImages.map(image => (
                    <picture>
                        <source media="(min-width:1024px)" srcSet={image.desktop} />
                        <source media="(min-width:768px)" srcSet={image.tablet} />
                        <img src={image.mobile} alt="preview"/>
                    </picture>
                ))}
            </div>
        </div>
    );
};

export default ProjectStaticPreviews;
