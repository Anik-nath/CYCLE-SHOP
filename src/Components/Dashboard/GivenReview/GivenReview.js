import React from "react";

const GivenReview = () => {
  return (
    <div id="review" className="text-center pt-2">
      <h2 className="text-2xl font-semibold text-green-500">
        Given a Review
      </h2>
      <div className="flex flex-col items-center mt-14">
        <form className="mb-4 mr-6">
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your company"
            name="company"
          />

          <textarea
            className="form-textarea p-2 w-full border focus:outline-none"
            rows="5"
            placeholder="Enter some feedback"
          ></textarea>
          <button className="bg-green-500 w-full rounded mt-4 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline">
            Given Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default GivenReview;
