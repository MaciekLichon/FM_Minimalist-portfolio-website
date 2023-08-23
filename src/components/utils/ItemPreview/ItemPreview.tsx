import './ItemPreview.scss';

import React from 'react';
import {motion} from 'framer-motion';

import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import {IImages} from '../../../data/projects-data';

type IProps = {
    index?: number;
    previewImage: IImages;
    title: string;
    previewText: string;
    linkTo: string;
    buttonText: string;
}

const ItemPreview: React.FC<IProps> = ({index, previewImage, title, previewText, linkTo, buttonText}) => {

    return (
        <motion.div
            className="preview"
            initial={index ? index % 2 === 0 ? {x: '-100%'} : {x: '100%'} : ''}
            animate={{x: '0'}}
            exit={index ? index % 2 === 0 ? {x: '100%'} : {x: '-100%'} : ''}
            transition={{duration: 0.5, ease: 'easeOut'}}
        >
            <picture className="preview__image">
                <source media="(min-width:1024px)" srcSet={previewImage.desktop} />
                <source media="(min-width:768px)" srcSet={previewImage.tablet} />
                <img src={previewImage.mobile} alt="preview" />
            </picture>
            <div className="preview__content borders">
                <h2 className="preview__title">{title}</h2>
                <p className="preview__text">{previewText}</p>
                <ButtonSecondary text={buttonText} to={linkTo} />
            </div>
        </motion.div>
    );
};

export default ItemPreview;
