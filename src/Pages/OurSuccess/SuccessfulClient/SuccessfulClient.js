import React from "react";
import { Link } from "react-router-dom";

const SuccessfulClient = () => {
  return (
    <div className="grid grid-cols md:grid-cols-3 gap-4 lg:grid-cols-3"> 
      <div >
       <a href="/" class="group relative block bg-black">
    <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-2xl font-bold text-white">Tony Wayne</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
          
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
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-2xl font-bold text-white">Tony Wayne</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
          
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
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div class="relative p-8">
    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p class="text-2xl font-bold text-white">Tony Wayne</p>

    <div class="mt-64">
      <div
        class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p class="text-sm text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
          perferendis hic asperiores quibusdam quidem voluptates doloremque
          reiciendis nostrum harum. Repudiandae?
          
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
