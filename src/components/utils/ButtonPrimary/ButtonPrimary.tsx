import './ButtonPrimary.scss';

import React from 'react';

type IProps = {
    text: string;
    to: string;
}

const ButtonPrimary: React.FC<IProps> = ({text, to}) => {

    return (
        <a href={to} className="btn-primary">
            <svg className="btn-primary__indicator" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect opacity="0.1" width="48" height="48" fill="black"/>
                <path d="M16 18L24 22L32 18" stroke="#5FB4A2"/>
                <path d="M16 22L24 26L32 22" stroke="#5FB4A2"/>
                <path d="M16 26L24 30L32 26" stroke="#5FB4A2"/>
            </svg>
            <p className="btn-primary__text navlink">{text}</p>
        </a>
    );
};

export default ButtonPrimary;
