import React from 'react';
import {motion} from 'framer-motion';

import GetInTouch from '../../sections/GetInTouch/GetInTouch';
import ContactForm from '../../sections/ContactForm/ContactForm';

const Contact: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5, ease: 'linear'}}
        >
            <GetInTouch />
            <ContactForm />
        </motion.div>
    );
};

export default Contact;
