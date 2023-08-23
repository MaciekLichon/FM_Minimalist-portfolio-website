import './ProjectBackground.scss';

import React from 'react';

type IProps = {
    backgroundText: string;
}
const ProjectBackground: React.FC<IProps> = ({backgroundText}) => {
    return (
        <div className="project-background">
            <h3 className="project-background__title">Project Background</h3>
            <p className="project-background__text">{backgroundText}</p>
        </div>
    );
};

export default ProjectBackground;
