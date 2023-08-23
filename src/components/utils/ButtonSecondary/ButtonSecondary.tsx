import './ButtonSecondary.scss';

import React from 'react';
import {Link} from 'react-router-dom';

type IProps = {
    text: string;
    to: string;
    additionalClass?: string;
}

const ButtonSecondary: React.FC<IProps> = ({text, to, additionalClass}) => {
    return (
        <Link to={to} className={`btn-secondary navlink ${additionalClass}`}>{text}</Link>
    );
};

export default ButtonSecondary;
