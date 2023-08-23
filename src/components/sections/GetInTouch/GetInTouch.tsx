import './GetInTouch.scss';

import React from 'react';
import SocialLinks from '../../utils/SocialLinks/SocialLinks';

const GetInTouch: React.FC = () => {
    return (
        <div className="touch borders contact-grid">
            <h2 className="touch__title">Get in Touch</h2>
            <div className="touch__content">
                <p className="touch__text">
                    I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.
                </p>
                <SocialLinks dark={true} />
            </div>
        </div>
    );
};

export default GetInTouch;
