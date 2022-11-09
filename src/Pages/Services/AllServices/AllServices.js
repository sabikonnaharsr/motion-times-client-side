import React, { useEffect } from 'react';
import UseTitle from '../../Hooks/UseTitle';

const AllServices = () => {
    UseTitle('All Services');

    useEffect(()=> {
        // http://localhost:5000/addServices/636ab4234885c740289368b2
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>all service cards</h1>
        </div>
    );
};

export default AllServices;