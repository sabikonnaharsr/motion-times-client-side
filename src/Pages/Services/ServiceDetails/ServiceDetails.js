import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import img1 from "../../../Assets/service/service1.png";
import { FaStar } from "react-icons/fa";
import UseTitle from "../../Hooks/UseTitle";
import ReviewPostPage from "../../ReviewPostPage/ReviewPostPage";
import ReviewCard from "../../ReviewCard/ReviewCard";

const ServiceDetails = () => {
  UseTitle("Service Details");

  const data = useLoaderData();
  const { img, title, price, ratings, message } = data;

  const clientComments = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.name.value;
    const comments = {
      name: "name",
      email: "email",
      price: "",
      ratings: "",
      img: "img",
      message: text,
    };

    fetch("https://sequel-extract-server.vercel.app/clientReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(comments),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div >
      <h1 className="text-5xl text-rose-700 font-GreatVibes mt-8 mb-6">Wow great you choose this Package!</h1>
      <div className="grid gap-4 md:grid-cols-2 md:grid-cols-3 mb-12 mt-6">
     
      <a href="/" class="group relative block bg-black">
<img
 alt="Developer"
 src={img}
 class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
/>

<div class="relative p-8">
 <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
  {title}
 </p>

 <p class="text-2xl font-bold text-white">price</p>

 <div class="mt-64">
   <div
     class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
   >
    <p>{ratings}</p>
     <p class="text-sm text-white">
        {message}
        <div>
        <Link to='services'><button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">See All</button></Link>
        </div>    
     </p>
   </div>
 </div>
</div>
</a> 

      {/* <section>
        <article class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25">
          <img alt="Office" src={img} class="h-56 w-full object-cover" />

          <div class="p-4 sm:p-6">
            <a href="/">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400">
              {message}
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
      </section> */}
      <div>
        <ReviewPostPage></ReviewPostPage>
        <div></div>
      </div>
    </div>
    </div>
   
  );
};

export default ServiceDetails;
