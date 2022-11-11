import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdatePage = () => {
   const data = useLoaderData()
   console.log(data[0]._id)
   const [update, setUpdate] = useState(data);

  const handleUpdate = (event) => {
    event.preventDefault();
    fetch(
      `https://sequel-extract-server.vercel.app/review/${data[0]._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          Swal.fire({
            icon: "success",
            title: "Update Success!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const messageOnchangeUpdate = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const newMessage = { ...update };
    newMessage[fieldName] = fieldValue;
    setUpdate(newMessage);
  };

    return (
        <div className=' bg-slate-800 py-10'>
             <form onSubmit={handleUpdate}
                className="self-stretch mx-auto  bg-slate-600 p-10 space-y-3 ng-untouched ng-pristine ng-valid w-3/5"
              >
                <div>
                  <input
                    name="fullName"
                    defaultValue = {data[0].name}
                    readOnly
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-md  bg-slate-800 dark:border-gray-700 p-5"
                  />
                </div>
                <div>
                  <input
                    defaultValue={data[0].email}
                    name="email"
                    type="text"
                    placeholder="Your email"
                    className="w-full rounded-md  bg-slate-800 dark:border-gray-700 p-5"
                    readOnly
                  />
                </div>
                  
                <div>
                  <textarea
                   onChange={messageOnchangeUpdate}
                   defaultValue={data[0].message}
                    name="message"
                    type="text"
                    placeholder="Your feedback"
                    className="w-full rounded-md  bg-slate-800 dark:border-gray-700 p-5"
                    required
                  />
                </div>
                 <div className='flex items-center space-x-5 justify-center'>
                 <input
                  type="submit"
                  className=" py-2 px-3 font-semibold rounded bg-slate-800 "
                  value="You can update"
                 
                />
                 <Link to="/myReview"><button className="px-3 py-2 font-semibold rounded bg-slate-800 ">Back to Review</button></Link>
                 </div>
              </form>
             
        </div>
    );
};

export default UpdatePage;