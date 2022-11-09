import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/service/service1.png'
import { FaStar } from 'react-icons/fa';


const ServiceDetails = () => {
    return (
    
      <div className='grid grid-cols md:grid-cols-3 gap-4 mt-7 mb-10'>
        <h1> title</h1>
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
     <h1>review into service details</h1>
      {/* <section>
       <article class="rounded-lg border border-gray-100 p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <span class="inline-block rounded p-2">
          
       </span>

       <a href="/">
        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
           user email
       </h3>
    </a>
       <a href="/">
        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
           service name
       </h3>
     </a>
     <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
         Always available, extremely knowledgeable, and a tremendous "can-do" attitude. Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations... the entire company was thrilled with it! Without any hesitation... highly recommended.
       </p>
         <div className='gap-4 '>
         <Link to="/"
            class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <button className='btn btn-ghost'>
              Delete
              </button>
            <span
            aria-hidden="true"
            class="block transition group-hover:translate-x-0.5" >
            &rarr;
         </span>
          </Link>
         <Link to="/"
            class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
              <button className='btn btn-ghost'> Update</button>
            <span
            aria-hidden="true"
            class="block transition group-hover:translate-x-0.5" >
            &rarr;
          </span>
          </Link>

         </div>
        
  </article> 
     </section> */}
  
 </div>


 {/* client review  */}
    <div className='grid'>
    <article class="rounded-sm bg-white p-6 ring  text-center ring-indigo-50 sm:p-8">
  <div class="flex items-start">
    <div
      class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
      aria-hidden="true">
        <img className='w-20 h-20 btn-circle rounded-full items-center' src={img1} alt="" />
    </div>

    <div class="sm:ml-8">
       <div className='  text-blue-600 font-bold'>
       <Link to='/'>
       <strong
        class="me-8 gap-7 group btn btn-ghost mt-4 inline-flex items-center text-sm font-medium"
      >  
       Delete
       <span
            aria-hidden="true"
            class="block transition font-bold group-hover:translate-x-0.5" >
            &rarr;
          </span>
      </strong>
       </Link>
       <Link to='/'>
       <strong
        class="me-8 gap-7 group btn btn-ghost mt-4 inline-flex items-center text-sm font-medium"
      >  
       Update
       <span
            aria-hidden="true"
            class="block transition font-bold group-hover:translate-x-0.5" >
            &rarr;
          </span>
      </strong>
       </Link>
       </div>

      <h3 class="mt-4 text-lg font-medium sm:text-xl">
        <a href="/" class="hover:underline"> Title </a>
      </h3>

      <p class="mt-1 text-sm text-gray-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla
        amet voluptatum sit rerum, atque, quo culpa ut necessitatibus eius
        suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid
        fuga. Sint.
      </p>

      <div class="mt-4 sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center text-gray-500">
       
      <div>
      <span className='flex  text-amber-500'>
       <FaStar></FaStar>
       <FaStar></FaStar>
      <FaStar></FaStar>
      <FaStar></FaStar>
      <FaStar></FaStar>
      </span>
      </div>
        </div>

        <span class="hidden sm:block" aria-hidden="true">&middot;</span>
        <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
          Featuring <a href="/" class="underline hover:text-gray-700">Barry</a>,
          <a href="/" class="underline hover:text-gray-700">Sandra</a> and
          <a href="/" class="underline hover:text-gray-700">August</a>
        </p>
      </div>
    </div>
  </div>
 
</article>

    </div>
</div>
     );
  };

export default ServiceDetails;