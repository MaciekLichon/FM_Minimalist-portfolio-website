import './Footer.scss'

import React from 'react';
import {Link} from 'react-router-dom';

import logoLight from '../../../images/logo-light.svg';

import SocialLinks from '../../utils/SocialLinks/SocialLinks';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={logoLight} alt="logo" className="footer__logo"/>
                </div>
                <div className="footer__links">
                    <Link to="/" className="footer__links-item navlink">Home</Link>
                    <Link to="/portfolio" className="footer__links-item navlink">Portfolio</Link>
                    <Link to="/contact" className="footer__links-item navlink">Contact me</Link>
                </div>
                <SocialLinks dark={false} />
            </div>
        </footer>
    );
};

export default Footer;
