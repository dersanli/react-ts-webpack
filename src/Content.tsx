import React, { ReactElement } from 'react';
import car from './assets/car.jpg';
import content from './css/content.module.css';

type ContentProps = {
    altText? : string
}

export const Content = ({ altText } : ContentProps): ReactElement => <div><img src={car} className={content.car} alt={altText}/></div>;