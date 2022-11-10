import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold font-GreatVibes text-rose-500 mt-20 mb-20">
        {" "}
        You’ve dreamed of this day for a lifetime. Make it unforgettable with
        <br /> 
        wedding photography  that reflects the unique couple that you are. Keep
        <br />
        the memory of it alive forever 
        with creative images that tell your love story to the world!
      </h1>


      <div className=" grid grid-cols md:grid-cols-3 gap-4 lg:grid-cols-3 mb-10 mt-10">
        {/* card one */}
      <div >
        <a href="/" class="group relative bg-slate-900 block h-96">
        <span class="absolute inset-0 border-2 border-dashed border-black"></span>
        <div class="relative flex h-full transform items-end border-2 border-black  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
            <img className="w-20 h-20 btn-circle rounded-full" src="https://images.pexels.com/photos/3650469/pexels-photo-3650469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

            <h2 class="mt-4 text-2xl font-medium text-rose-600">California State</h2>
          </div>

          <div class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <h3 class="mt-4 text-2xl font-medium text-rose-600">California State</h3>

            <p class="mt-4">
            A marriage based on love and respect doesn't just happen. Both spouses have to do their part. Below are some important keys to work on each day to make your marriage successful.
            </p>

            <Link to='/allServices' class="mt-8 font-bold text-rose-600">Read more</Link>
          </div>
        </div>
      </a>
      </div>


      {/* card two */}
      <div >
        <a href="/" class="group relative bg-slate-900 block h-96">
        <span class="absolute inset-0 border-2 border-dashed border-black"></span>
        
        <div class="relative flex h-full transform items-end border-2 border-black  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
            <img className="w-20 h-20 btn-circle rounded-full" src="https://images.pexels.com/photos/3209258/pexels-photo-3209258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <h2 class="mt-4 text-2xl font-medium text-rose-600">Washington Dc</h2>
          </div>
          <div class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <h3 class="mt-4 text-2xl font-medium text-rose-600">Washington Dc</h3>
            <p class="mt-4 ">
            Talking with your spouse is one of the best ways to keep your marriage healthy and successful. Be honest about what you're feeling, but be kind and respectful when you communicate. Part of good communication is being a good listener and taking the time to understand what it is your spouse wants and needs from you.
            </p>
            <Link to='/allServices' class="mt-8 text-rose-600 font-bold">Read more</Link>
          </div>
        </div>
      </a>
      </div>


      {/* card three */}
     <div className="">
        <a href="/" class="group relative bg-slate-900 block h-96">
        <span class="absolute inset-0 border-2 border-dashed border-black"></span>
        <img className="w-50 h-70" src="" alt="" />
        <div class="relative flex h-full transform items-end border-2 border-black  transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div class="px-8 pb-8 transition-opacity group-hover:absolute group-hover:opacity-0">
          <img className='w-20 h-20 btn-circle rounded-full' src="https://images.squarespace-cdn.com/content/v1/5e7f855637e9204813f4f512/1648602284573-39KI4HC4U57OP8IGB6WE/image-asset.jpeg?format=300w" alt="" />
            <h2 class="mt-4 text-2xl font-medium text-rose-600">Massachusetts </h2>
          </div>
          <div class="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
            <h3 class="mt-4 text-2xl font-medium text-rose-600">Massachusetts </h3>
            <p class="mt-4">
            Appreciate each other, your relationship, your family, and your lives together. Show gratitude when your partner cooks dinner, helps the kids with their homework, or does the grocery shopping. It may help to take a few minutes each evening to tell each other at least one thing you appreciated that day.
            </p>
            <Link to='/allServices' class="mt-8 text font-bold text-rose-600">Read more</Link>
          </div>
        </div>
      </a>
      </div>
   {/* card three end */}
     </div>       
    </div>
  );
};

export default About;
