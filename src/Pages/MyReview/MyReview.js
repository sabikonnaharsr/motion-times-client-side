import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/UserContext/UserContext";

import ReviewCard from "../ReviewCard/ReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [review, setReview] = useState([]);

  console.log(`http://localhost:5000/reviewByMail?email=${user?.email}`);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewByMail?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);
  console.log(review);

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

      <div className="grid grid-cols-2 gap-5">
        {review.map((r) => (
          <ReviewCard
            key={r._id}
            r={r}
            handleRemove={handleRemove}
          ></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
