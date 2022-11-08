import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import OurContents from '../../OurContents/OurContents';
import About from '../../Services/About/About';
import OrganizationDetails from '../../Services/OrganizationDetails/OrganizationDetails';
import Carousel from '../Carousel/Carousel';


const Home = () => {
    UseTitle("Home")
    return (
        <div>
            <h1>home</h1>
            <Carousel></Carousel>
             <OurContents></OurContents>
            <OrganizationDetails></OrganizationDetails>
            <About></About>
        </div>
    );
};

export default Home;