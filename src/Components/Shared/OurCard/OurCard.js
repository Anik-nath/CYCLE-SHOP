import React from "react";
import Rating from "react-rating";
import { Link } from "react-router-dom";


const OurCard = (props) => {
  const { _id,name,rating,price,img } = props.products;


  return (
    <div className="w-full relative rounded shadow-lg bg-gray-50 mx-auto p-2">
      <div className="absolute bg-green-500 text-white capitalize rounded-full rounded-b-none rounded-l-none top-0 left-0 px-3">new</div>
      <div>
      <img
        className="w-full"
        src={img}
        alt="cycle"
      />
      </div>
      <div className="px-6 py-4">
      <div className="text-center text-green-500" id="rating">
      <Rating
        initialRating={rating}
        readonly
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
       />
      </div>
        <div className="text-center">
        <h1 className="font-bold text-xl py-4 text-gray-600">{name}</h1>
        <h1 className="text-xl">Price : <span className="text-green-500 font-semibold">Rs {price}</span></h1>
        </div>
      </div>
      <div className="px-6 py-4 text-center">
       <Link to={`/purchase/${_id}`}>
       <button className="text-gray-600 hover:text-white border border-green-500 hover:border-transparent hover:bg-green-500 font-bold py-2 px-4 rounded-full">
          Purchase
        </button>
       </Link>
      </div>
    </div>
  );
};

export default OurCard;
