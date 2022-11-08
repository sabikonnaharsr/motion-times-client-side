import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import About from '../../Services/About/About';
import Carousel from '../Carousel/Carousel';


const Home = () => {
    UseTitle("Home")
    return (
        <div>
            <h1>home</h1>
            <Carousel></Carousel>
            <About></About>
        </div>
    );
};

export default Home;