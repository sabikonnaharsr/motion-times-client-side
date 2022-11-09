import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/service/service1.png'
import { FaStar } from 'react-icons/fa';
import UseTitle from '../../Hooks/UseTitle';


const ServiceDetails = () => {
  UseTitle('Service Details')
  
  const clientComments = (e) => {
    e.preventDefault()
    const form = e.target;
    const text = form.name.value;
    const comments = {
      name: 'name',
      email: 'email',
      price: '',
      ratings: '',
      img: 'img',
      message: text,

    }

    fetch('http://localhost:5000/clientReview', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(comments)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

    return (
    
      <div className='grid gap-4 md:grid-cols-2 mt-6'>
        <h1> title</h1>
        <section>
       <article
        class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25">
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

 {/* client review  */}
<div>
  <h1 className='text-3xl font-bold text-white mb-4'>Please put your comment here</h1>
  <div className='grid'>
   <article class="rounded-sm bg-white p-6 ring text-center ring-indigo-50 sm:p-8">
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



{/* form section review */}
 <form onSubmit={clientComments}>
 <div>
  <label
    for="UserEmail"
    class="block mt-5 font-bold text-2xl text-gray-700 dark:text-gray-200"
  >
    Write Here....
  </label>

  <input
    name='name'
    type="text"
    id="UserEmail"
    placeholder="Clients Review"
    required
    class="mt-1 text-center w-full h-20 border-gray-200 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white sm:text-sm"
  />
</div>
<span
  class="inline-flex -space-x-px overflow-hidden  mb-4 mt-3 rounded-md border bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900"
>
  <button
    class="inline-block px-24 py-8  text-sm font-medium text-gray-700 dark:hover:bg-gray-800 hover:bg-gray-50 focus:relative dark:text-gray-200 "
  >
    Please Comment Below
  </button>
</span>
 </form>


{/* button  */}

 </div>
</div>
  );
 };

export default ServiceDetails;