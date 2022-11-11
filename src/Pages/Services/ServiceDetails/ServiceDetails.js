import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import img1 from "../../../Assets/service/service1.png";
import { FaStar } from "react-icons/fa";
import UseTitle from "../../Hooks/UseTitle";
import ReviewPostPage from "../../ReviewPostPage/ReviewPostPage";
import ReviewCard from "../../ReviewCard/ReviewCard";
import { AuthContext } from "../../../Contexts/UserContext/UserContext";
import ReviewById from "./ReviewById";

const ServiceDetails = () => {
  const [review, setReview] = useState([])
  UseTitle("Service Details");
  const { user } = useContext(AuthContext);
  console.log(user);
  const data = useLoaderData();
  const { img, title, description,ratings, price, _id } = data;

  useEffect(()=>{
    fetch(`https://sequel-extract-server.vercel.app/reviewId?serviceId=${_id}`)
    .then(res => res.json())
    .then(data => setReview(data))
  }, [review, _id])

  const clientComments = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.feedback.value;
    const comments = {
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      message: text,
      serviceId: _id,
      serviceTitle: title,
    };

    fetch("https://sequel-extract-server.vercel.app/reviewByMail", {
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
    <div>
       
      <div>
        <h1 className="text-5xl text-rose-700 text-center font-GreatVibes mt-10 "> Wow great you choose this Package!
      </h1>
        <div className="w-11/12 mx-auto py-16 grid grid-cols-2 gap-10">
          <div>
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

                <p class="text-2xl font-bold text-white">{price}</p>

                <div class="mt-64">
                  <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p class="text-sm text-white">
                      {description}
                      <p class="text-sm text-white">Ratings: {ratings}</p>
                      <div>
                        <Link to="/services">
                          <button className=" py-1 px-3 font-GreatVibes text-rose-600 text-4xl bg-slate-800 rounded-md">
                            See All
                          </button>
                        </Link>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div>
            <div className="py-16 rounded-md  dark:bg-gray-900">
              <h1 className="text-5xl font-GreatVibes dark:text-gray-50">
                 Please put your opinion!
              </h1>
              <p className="my-8">
                <span className="font-medium dark:text-gray-50">
                  How was your experience?
                </span>
              </p>
              <form
                onSubmit={clientComments}
                className="self-stretch mx-auto space-y-3 ng-untouched ng-pristine ng-valid w-3/5"
              >
                <div>
                  <input
                    name="fullName"
                    defaultValue={user?.displayName}
                    readOnly
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-md  bg-slate-800 dark:border-gray-700 p-5"
                  />
                </div>
                <div>
                  <input
                    name="email"
                    type="text"
                    placeholder="Your email"
                    defaultValue={user?.email}
                    className="w-full rounded-md  bg-slate-800 dark:border-gray-700 p-5"
                    readOnly
                  />
                </div>
                  
                <div>
                  <textarea
                    name="feedback"
                    type="text"
                    placeholder="Your feedback"
                    className="w-full rounded-md  bg-slate-800 dark:border-gray-700 p-5"
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="w-6/12 py-2 font-semibold rounded bg-slate-800 "
                  value="Join the wait list"
                />
              </form>
            </div>
          </div>
        </div>
        <div>
           {!user?.email && <h1 className="text-4xl font-GreatVibes mb-6 mt-5">Please <Link className=" text-blue-700 " to='/login'>login</Link> to add a review.</h1>}
             {
              user?.email && <div className="grid w-11/12 mx-auto grid-cols-3 px-5  gap-5">
              {
               review.map(r => <ReviewById key={r._id}
               reviewData={r}
               ></ReviewById>)
              }
            </div>
             }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
