import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/errorPic/error.png'
const ErrorPage = () => {
    return (
        <div>
            <h1 className='text-red-700 font-sanserif text-6xl font-bold'>404</h1>
            <h3 className='text-red-700 font-sanserif text-4xl font-medium mt-3 mb-5 '>You are coming to the wrong way!</h3>
            <Link to='/' className='text-5xl mb-7 font-bold text-red-800'>Please Go Back To Home Page</Link>
            <img className='mt-8' src= {logo} alt="" />
        </div>
    );
};

export default ErrorPage;