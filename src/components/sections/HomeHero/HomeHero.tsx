import './HomeHero.scss';

import React from 'react';

import ButtonPrimary from '../../utils/ButtonPrimary/ButtonPrimary';

import heroMobile from '../../../images/homepage/mobile/image-homepage-hero.jpg';
import heroTablet from '../../../images/homepage/tablet/image-homepage-hero.jpg';
import heroDesktop from '../../../images/homepage/desktop/image-homepage-hero.jpg';

const HomeHero: React.FC = () => {
    return (
        <section className="hero">
            <picture className="hero__image">
                <source media="(min-width:1024px)" srcSet={heroDesktop} />
                <source media="(min-width:768px)" srcSet={heroTablet} />
                <img src={heroMobile} alt="hero" />
            </picture>
            <div className="hero__content">
                <h1 className="hero__title">Hey, I’m Alex Spencer and I love building beautiful websites</h1>
                <ButtonPrimary text='About me' to='#about' />
            </div>
        </section>
    );
};

export default HomeHero;
