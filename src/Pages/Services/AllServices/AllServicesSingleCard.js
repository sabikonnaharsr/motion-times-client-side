import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllServicesSingleCard = ({allService}) => {
  console.log(allService)
    const {title, price, img, description} = allService;
    return (
   <div className="gird grid-cols md:grid-cols-3 lg:grid-cols-3 gap-4">
     <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            
            src= {img}
            className="object-cover w-full h-64"
            alt=""
          />
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
              <span className="text-gray-600">— ${price}</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {title}
            </a>
            <p className="mb-2 text-gray-700">
              {description.slice(0,100)  }... 
            </p>
       
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
    </div>
  </div>
  );
};

export default AllServicesSingleCard;