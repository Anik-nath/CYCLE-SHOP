import React, { useEffect, useState } from "react";
// import Carousel from "../../Carousel/Carousel";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const [review, setReviw] = useState([]);

  useEffect(() => {
    fetch("https://cycle-shop-api-server.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviw(data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100">
      </div>
      <div className="pt-8 bg-gray-50">
        <div className="container lg:mx-auto px-4">
          <div className="review w-full py-8">
            <h1 className="text-center text-3xl font-semibold uppercase">
              Latest <span className="text-green-500">Review</span>
            </h1>
            <img
              className="mx-auto"
              src="https://i.ibb.co/vXRgmg3/seperator.png"
              alt=""
            />
            <p className="mb-8 text-center text-gray-400 lg:w-full w-3/4 mx-auto">
              Latest Feedback From A Gentel Client.Lets See His Review
            </p>
            <div className="flex lg:flex-row flex-col gap-x-4">
              {review.slice(-2).map((review) => (
                <ReviewCard review={review} key={review._id}></ReviewCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
