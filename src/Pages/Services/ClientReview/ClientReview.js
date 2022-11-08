import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/service/service1.png'



const ClientReview = () => {
    return (
    <div className='grid grid-cols md:grid-cols-3'>
     <h1>review</h1>
      <section>
       <article class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <span class="inline-block rounded p-2">
          <img src={img1} alt="" />
       </span>

       <a href="/">
        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       </h3>
    </a>
    <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis enim eius nostrum magnam provident rem maiores aut facere dolore, voluptatibus illo numquam vero perferendis placeat est, necessitatibus minima, doloribus dolores.
    </p>

     <Link to="/"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more
     <span
     aria-hidden="true"
     class="block transition group-hover:translate-x-0.5" >
     &rarr;
    </span>
   </Link>
   <div>
      <span className='flex  text-amber-500'>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </span>
    </div>
  </article> 
</section>
  {/* review section end */}
 </div>
  );
};

export default ClientReview;