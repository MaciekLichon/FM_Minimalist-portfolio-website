import './Project.scss';

import React, {useEffect} from 'react';
import {motion} from 'framer-motion';

import {useParams} from 'react-router';
import {useState} from 'react';

import ProjectHeroImage from '../../sections/ProjectHeroImage/ProjectHeroImage';
import ProjectDetails from '../../sections/ProjectDetails/ProjectDetails';
import ProjectBackground from '../../sections/ProjectBackground/ProjectBackground';
import ProjectStaticPreviews from '../../sections/ProjectStaticPreviews/ProjectStaticPreviews';
import ProjectControls from '../../sections/ProjectControls/ProjectControls';

import {IProject, projectsData} from '../../../data/projects-data';

const Project: React.FC = () => {

    const {title} = useParams();
    const [project, setProject] = useState<IProject>({
        previewImage: {mobile: '', tablet: '', desktop: ''},
        heroImage: {mobile: '', tablet: '', desktop: ''},
        staticImages: [ {mobile: '', tablet: '', desktop: ''} ],
        title: '',
        previewText: '',
        backgroundText: '',
        projectAreas: [''],
        projectTechnologies: [''],
        linkTo: '',
        nextProject: '',
        prevProject: ''
    });

    useEffect(() => {
        const data = projectsData.find(item => item.title.toLowerCase() === title);
        if (data) {
            setProject(data);
        }
    }, [title]);

    return (
        <motion.div
            className="project"
            exit={{opacity: 0}}
            transition={{duration: 0.3, ease: 'easeIn'}}
        >
            <ProjectHeroImage heroImage={project.heroImage} />
            <section className="project-content">
                <ProjectDetails title={project.title} previewText={project.previewText} projectAreas={project.projectAreas} projectTechnologies={project.projectTechnologies} />
                <ProjectBackground backgroundText={project.backgroundText} />
                <ProjectStaticPreviews staticImages={project.staticImages} />
            </section>
            <ProjectControls nextProject={project.nextProject} prevProject={project.prevProject} />

            <motion.div
                className="project-mask"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                transition={{duration: 0.5, ease: 'easeIn'}}
            />
        </motion.div>
    );
};

export default Project;
