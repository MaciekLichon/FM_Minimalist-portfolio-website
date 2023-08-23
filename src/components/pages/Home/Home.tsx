import React from 'react';
import {motion} from 'framer-motion';

import About from '../../sections/About/About';
import HomeHero from '../../sections/HomeHero/HomeHero';

const Home: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5, ease: 'linear'}}
        >
            <HomeHero/>
            <About/>
        </motion.div>
    );
};

export default Home;
