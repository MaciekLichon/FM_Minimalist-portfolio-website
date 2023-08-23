import './About.scss';

import React from 'react';

import ItemPreview from '../../utils/ItemPreview/ItemPreview';

import profileImgMobile from '../../../images/homepage/mobile/image-homepage-profile.jpg';
import profileImgTablet from '../../../images/homepage/tablet/image-homepage-profile.jpg';
import profileImgDesktop from '../../../images/homepage/desktop/image-homepage-profile.jpg';

const images = {
    mobile: profileImgMobile,
    tablet: profileImgTablet,
    desktop: profileImgDesktop
}


const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <ItemPreview
                previewImage={images}
                title='About Me'
                previewText='I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.'
                linkTo='/portfolio'
                buttonText='Go to portfolio'
            />
        </section>
    );
};

export default About;
