import './Together.scss';

import React from 'react';
import {motion} from 'framer-motion';
import {Outlet} from 'react-router-dom';
import ButtonSecondary from '../../utils/ButtonSecondary/ButtonSecondary';

const Together: React.FC = () => {
    return (
        <>
            {/*outlet renders the contect of child path*/}
            <Outlet />

            <motion.section
                className="together"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.5, ease: 'linear'}}
            >
                <h2 className="together__title">
                    Interested in doing a project together?
                </h2>
                <ButtonSecondary text='Contact me' to='/contact' additionalClass='together__btn' />
            </motion.section>
        </>
    );
};

export default Together;
