import React, { useEffect, useState } from "react";
// import Carousel from "../../Carousel/Carousel";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const [review, setReviw] = useState([]);

  useEffect(() => {
    fetch("https://cycling-server-153ll8upe-aniknath.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviw(data));
  }, []);
  return (
    <div>
      <div className="bg-gray-100">
        {/* <div className="py-10 container mx-auto ">
            <h1 className="text-center text-2xl font-semibold text-green-500 uppercase">Testimonials</h1>
            <h1 className="text-center text-gray-600 text-2xl pb-2 ">What our client says</h1>
            <div className="mb-8">
            <Carousel></Carousel>
            </div>
        </div> */}
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
