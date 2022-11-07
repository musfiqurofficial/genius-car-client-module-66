import React from 'react';
import AboutSection from './AboutSection';
import Carousel from './Carousel';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='lg:w-10/12 w-11/12 mx-auto my-3'>
            <Carousel></Carousel>
            <AboutSection></AboutSection>
            <Services></Services>
        </div>
    );
};

export default Home;