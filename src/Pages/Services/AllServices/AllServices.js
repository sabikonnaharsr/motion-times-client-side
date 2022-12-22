import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Services from '../Services/Services';
import AllServicesSingleCard from './AllServicesSingleCard';

const AllServices = () => {
    UseTitle('All Services');
    const [allServices, setAllServices] = useState([])

    
    useEffect(() => {
        fetch('https://sequel-extract-server.vercel.app/allServices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])



    return (
        <div>
            <h1 className='text-pink-500 font-bold mt-10 text-3xl'>All services are here please select your best one</h1>
            <div className="justify-between lg:px-20 px-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mb-6 mt-10">
              {
                allServices.map(allService => <AllServicesSingleCard 
                key={allService._id}
                allService={allService}
                
                ></AllServicesSingleCard>)
              }    
        </div>
        </div>
    );
};

export default AllServices;