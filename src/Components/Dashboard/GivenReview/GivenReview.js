import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";

const GivenReview = () => {
  const [data, setData] = useState({});
  const {user} = useAuth();

  const handleField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newField = { ...data };
    newField[field] = value;
    console.log(newField);
    setData(newField);
  };
  const handleOrder = (e) => {
    const review = {
      ...data,
      image : user?.photoURL,
      name: data?.name,
      company: data?.company,
      rating: data?.rating,
      feedback: data?.feedback,
    };

    fetch("https://blooming-dawn-18027.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Thanks for Your Review");
        }
      });

    e.preventDefault();
  };

  return (
    <div id="review" className="text-center pt-2">
      <h2 className="text-2xl font-semibold text-green-500">Given Review</h2>
      <div className="flex flex-col items-center mt-14">
        <form onSubmit={handleOrder} className="mb-4 mr-6">
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            onBlur={handleField}
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Your company"
            name="company"
            onBlur={handleField}
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            max="5"
            min="1"
            placeholder="rating"
            name="rating"
            onBlur={handleField}
          />
          <textarea
            className="form-textarea p-2 w-full border focus:outline-none"
            rows="5"
            placeholder="Enter some feedback"
            name="feedback"
            onBlur={handleField}
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 w-full rounded mt-4 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline"
          >
            Given Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default GivenReview;
