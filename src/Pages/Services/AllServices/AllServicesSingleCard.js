import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/UseTitle';

const AllServicesSingleCard = ({allService}) => {
   UseTitle('All Services Single Card')
    const {title, price, img, description, _id} = allService;
    return (
   <div>
     <div className="">
      <div className=" ">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
        <PhotoProvider>
          <PhotoView src={img}><img  
            src= {img}
            className="object-cover w-full h-64"
            alt=""/>
            </PhotoView>
          </PhotoProvider> 
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
              {description?.slice(0,100)  }... 
            </p>
       
            <span className="flex items-center text-amber-400">
                <FaStar className="flex items-center"></FaStar>
                <FaStar className="flex items-center"></FaStar>
                <FaStar className="flex items-center"></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
             </span>  
             <Link to={`/services/${_id}`}><button className='text-rose-600 text-2xl font-bold'>View Details</button></Link>  
          </div>
        </div>
      
      </div>
    </div>
  </div>
  );
};

export default AllServicesSingleCard;