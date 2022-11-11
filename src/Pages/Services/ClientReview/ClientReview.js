import React from 'react';
import UseTitle from '../../Hooks/UseTitle';



const ClientReview = () => {
  UseTitle('Client Review')
    return (
      <div>
        <h3 className="font-bold text-center mt-20 mb-20  text-blue-500"> <p className='text-white text-3xl mb-3'>JULIE & MJ
        AN AFFAIR BY THE LAKE Geoff was laid back,</p>
       <p className='font-GreatVibes text-4xl '>
        listened to what we wanted, and took great photos in a very short
        amount of time. Our wedding was 4 hours from start to finish and 
        <br />
         Geoff was there for 3, which is not that long for all of those 
          photos. He even stayed a few minutes longer to capture a few more
          <br />
          photos for us. It was much appreciated! Thanks Portrait Gallery! Our pictures came out great!
        </p>
       <p className='text-blue-600 gap-4 font-bold'>________     _________     ________ </p>
       </h3>
     </div>
    );
  };

export default ClientReview;