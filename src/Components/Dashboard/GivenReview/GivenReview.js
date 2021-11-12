import React from "react";

const GivenReview = () => {
  return (
    <div id="review" className="text-center pt-24">
      <h2 className="text-2xl font-semibold py-2 text-green-500">Write Review</h2>
      <div className="flex flex-col items-center mt-14">
        <textarea
          className="form-textarea p-2 w-1/2 border focus:outline-none"
          rows="3"
          placeholder="Enter some feedback"
        ></textarea>
        <button className="bg-green-500 w-1/2 rounded mt-4 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline">
          Given Review
        </button>
      </div>
    </div>
  );
};

export default GivenReview;
