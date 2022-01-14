import React, { ReactElement } from 'react';
import heading from './heading.module.css';

type HeadingProps = {
    message: string
};

export const Heading = ({ message }: HeadingProps): ReactElement => <h1 className={heading.heading}>{message}</h1>;