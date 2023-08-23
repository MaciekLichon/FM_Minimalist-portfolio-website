import './Navbar.scss';

import {motion} from 'framer-motion';
import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import logoDark from '../../../images/logo-dark.svg';

const Navbar: React.FC = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <motion.nav
            className="navbar"
            initial={{y: '-100%'}}
            animate={{y: '0%'}}
            exit={{y: '-100%'}}
            transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <img src={logoDark} alt="logo" className="navbar__logo"/>
            <button
                className={`navbar__toggle ${navOpen ? 'navbar__toggle-open' : ''}`}
                onClick={() => setNavOpen(!navOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div className={`navbar__links ${navOpen ? 'navbar__links-open' : ''}`}>
                <div className="navbar__links-container">
                    <NavLink
                        to='/'
                        className="navlink navbar__links-item"
                        onClick={() => setNavOpen(!navOpen)}>
                        Home
                    </NavLink>
                    <NavLink
                        to='/portfolio'
                        className="navlink navbar__links-item"
                        onClick={() => setNavOpen(!navOpen)}>
                        Portfolio
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className="navlink navbar__links-item"
                        onClick={() => setNavOpen(!navOpen)}>
                        Contact me
                    </NavLink>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
