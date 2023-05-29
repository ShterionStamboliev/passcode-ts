import React, { ReactElement } from 'react';
import '../styles/Styles.css'

type HeadingProps = {
    title: string,
    subTitle: string
};

const Heading = ({ title, subTitle }: HeadingProps): ReactElement => {
    return (
        <header className='wrapper'>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </header>
    );
};

export default Heading;