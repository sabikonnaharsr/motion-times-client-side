import React from "react";
import { Link } from "react-router-dom";

const SuccessfulClient = () => {
  return (
    <div className="grid grid-cols md:grid-cols-3 gap-4 lg:grid-cols-3 mb-10"> 
      <div >
       <a href="/" class="group relative block bg-black">
    <img
    alt="Developer"
    src="https://images.squarespace-cdn.com/content/v1/5e7f855637e9204813f4f512/b123c69c-d930-4366-9d25-8a4c733cf3eb/DSC06425.jpg?format=500w"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Photographer
    </p>

    <p class="text-2xl font-bold text-white">Josh Rogers</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
        We know the very best wedding officiants who can customize the words and expressions of your wedding ceremony. And, we have experienced professional wedding photographers    
           <div>
           <Link to='blogs '><button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">See All</button></Link>
           </div>    
        </p>
      </div>
    </div>
  </div>
 </a>
 {/* single card */}
  </div>
      <div className="">
       <a href="/" class="group relative block bg-black">
   <img
    alt="Developer"
    src="https://images.squarespace-cdn.com/content/v1/5e7f855637e9204813f4f512/ea2b8837-4a41-4026-8ddf-917f0503b936/DSC01902.jpg?format=500w"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Make Over
    </p>

    <p class="text-2xl font-bold text-white">Backle Sun</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
           Congratulations on your decision to be married! You have found us because you must be planning your destination wedding celebration in Arizona at the Grand Canyon National Park
           <div>
           <Link to='blogs '><button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">See All</button></Link>
           </div>    
        </p>
      </div>
    </div>
  </div>
      </a>
  </div>
      <div className="">
       <a href="/" class="group relative block bg-black">
   <img
    alt="Developer"
    src="https://images.squarespace-cdn.com/content/v1/5e7f855637e9204813f4f512/40561ccc-903f-4e1e-b409-845d19f331b0/DSC01424.jpg?format=500w"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Place Organizer
    </p>

    <p class="text-2xl font-bold text-white">Tony Wayne</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          We specialize in weddings at The Grand Canyon National Park in Northern Arizona. There is no place else on earth quite like it! Your Grand  Canyon     
           <div>
           <Link to='blogs '><button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">See All</button></Link>
           </div>    
        </p>
      </div>
    </div>
  </div>
  </a>
</div>
</div>
  );
};

export default SuccessfulClient;
