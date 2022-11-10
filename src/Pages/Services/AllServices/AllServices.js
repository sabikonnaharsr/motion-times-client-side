import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Services from '../Services/Services';
import AllServicesSingleCard from './AllServicesSingleCard';

const AllServices = () => {
    // UseTitle('All Services');
    const [allServices, setAllServices] = useState([])

    
    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    },[])



    return (
        <div className="my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {
                allServices.map(allService => <AllServicesSingleCard 
                key={allService._id}
                allService={allService}
                
                ></AllServicesSingleCard>)
              }    
        </div>
    );
};

export default AllServices;