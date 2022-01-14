import React, { ReactElement } from 'react';
import car from './car.jpg';
import content from './content.module.css';

type ContentProps = {
    altText? : string
}

export const Content = ({ altText } : ContentProps): ReactElement => <div><img src={car} className={content.car} alt={altText}/></div>;