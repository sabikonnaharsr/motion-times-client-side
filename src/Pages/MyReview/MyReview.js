import React, { useEffect, useState } from "react";
import UserContext, { AuthContext } from "../../Contexts/UserContext/UserContext";

import ReviewCard from "../ReviewCard/ReviewCard";

const MyReview = () => {
  const { user } = UserContext(AuthContext);
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [user?.email]);


  
  const handleRemove = (id) => {
    const proceed = window.confirm("Are you sure, you want to remove");
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("remove successfully");
            const remaining = review.filter((r) => r._id !== id);
            setReview(remaining);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-5xl my-6">You have {review.length} Orders</h2>

      {review.map((r) => (
        <ReviewCard key={r._id} r={r} handleRemove={handleRemove}></ReviewCard>
      ))}
    </div>
  );
};

export default MyReview;
