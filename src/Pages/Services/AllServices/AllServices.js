import React, { useEffect, useState } from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Services from '../Services/Services';
import AllServicesSingleCard from './AllServicesSingleCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])
  
    UseTitle('All Services');

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setAllServices(data))
    }, [])


    return (
        <div>
              {
                allServices.map(allService => <AllServicesSingleCard 
                key={allServices._id}
                allService={allService}
                
                ></AllServicesSingleCard>)
              }    
        </div>
    );
};

export default AllServices;