import React from "react";
import Rating from "react-rating";


const OurCard = (props) => {
  const { name } = props.products;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-50 mx-auto p-2">
      <img
        className="w-full"
        src="https://template.hasthemes.com/rideo/rideo/img/products/u1.png"
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
      <div className="text-center text-green-500" id="rating">
      <Rating
        initialRating={3}
        readonly
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
       />
      </div>
        <div className="text-center">
        <h1 className="font-bold text-xl py-4 text-gray-600">{name}</h1>
        <h1 className="text-xl">Price : <span className="text-green-500 font-semibold">$100</span></h1>
        </div>
      </div>
      <div className="px-6 py-4 text-center">
        <button className="text-gray-600 hover:text-white border border-green-500 hover:border-transparent hover:bg-green-500 font-bold py-2 px-4 rounded-full">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default OurCard;
