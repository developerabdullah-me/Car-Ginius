import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../sheare/Helmet/PageTitle';

const About = () => {
    return (
        <div>
            {/* <Helmet><title>About - Car Genius</title></Helmet> */}
            <PageTitle title="About"></PageTitle>
            <h1>about</h1>
        </div>
    );
    
};

export default About;