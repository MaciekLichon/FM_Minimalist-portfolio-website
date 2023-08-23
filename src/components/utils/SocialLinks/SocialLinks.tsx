import './SocialLinks.scss';

import React from 'react';

import iconGh from '../../../images/icons/github.svg';
import iconTw from '../../../images/icons/twitter.svg';
import iconLi from '../../../images/icons/linkedin.svg';

import iconGhDark from '../../../images/icons/github-dark.svg';
import iconTwDark from '../../../images/icons/twitter-dark.svg';
import iconLiDark from '../../../images/icons/linkedin-dark.svg';

type IProps = {
    dark: boolean;
}

const SocialLinks: React.FC<IProps> = ({dark}) => {
    return (
        <div className="socials">
            <a href="/" className="socials__item">
                <img src={dark ? iconGhDark : iconGh} alt="github" className="socials__item-icon"/>
            </a>
            <a href="/" className="socials__item">
                <img src={dark ? iconTwDark : iconTw} alt="twitter" className="socials__item-icon"/>
            </a>
            <a href="/" className="socials__item">
                <img src={dark ? iconLiDark : iconLi} alt="linkedin" className="socials__item-icon"/>
            </a>
        </div>
    );
};

export default SocialLinks;
