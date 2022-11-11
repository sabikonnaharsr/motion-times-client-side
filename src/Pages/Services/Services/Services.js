import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import UseTitle from "../../Hooks/UseTitle";


const Services = () => {
  const [services, setServices] = useState([]);
  // const {_id, img, price, title} =services;
  UseTitle('Services')

  useEffect(() => {
    fetch("https://sequel-extract-server.vercel.app/threeServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
   


  return (
    <div >
   <div className="my-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {
      services.map(service =>    <div className=" px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="  sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
         <PhotoProvider><PhotoView src={service.img}><img
            
            src= {service.img}
            className="object-cover w-full h-64"
            alt=""
          /></PhotoView></PhotoProvider> 
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Package-Price
              </a>
              <span className="text-gray-700">— ${service.price}</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700 text-slate-700"
            >
              {service.title}
            </a>
            <p className="mb-2 text-gray-900">
             <p className="text-gray-700">Ratings: {service?.ratings}</p>
              {service?.description?.slice(0,100)  }... 
            </p>
            
            <Link
              to={'/allServices'}
              aria-label=""
              className="inline-flex items-center font-bold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 text-pink-600 text-xxl"
            >
             See All
            </Link>
            <span className="flex items-center text-amber-400">
                <FaStar className="flex items-center"></FaStar>
                <FaStar className="flex items-center"></FaStar>
                <FaStar className="flex items-center"></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
             </span>    
          </div>
        </div>
       
      </div>
    
    </div>)
    }
    
   </div>
   <div class="text-center">
      <Link
        to='/allServices'
        class="mt-8 inline-flex mb-5 items-center rounded border border-pink-600 bg-pink-600 px-8 py-3 text-white hover:bg-transparent focus:outline-none focus:ring active:text-pink-500" >
        <span class="text-sm text-center font-medium px-16"> View All </span>
      </Link>
    </div>
   </div>
  );
};

export default Services;
