import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/service/service1.png'
import { FaStar } from 'react-icons/fa';


const ServiceDetails = () => {
    return (
    
      <div className='grid grid-cols md:grid-cols-3 gap-4 mt-7 mb-10'>
        <h1> card details</h1>
        <section>
       <article
        class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
      >
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="h-56 w-full object-cover"
        />

        <div class="p-4 sm:p-6">
          <a href="/">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
          </a>

          <p
            class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
            sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
            voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
            Molestias explicabo corporis voluptatem?
          </p>

            <a
              href="/"
              class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more

              <span
                aria-hidden="true"
                class="block transition group-hover:translate-x-0.5"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
        </section>
            
    
       {/* <ClientReview></ClientReview> */}
    <div className=''>
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
</div>
     );
  };

export default ServiceDetails;