import React from "react";
import Rating from "react-rating";

const ReviewCard = (props) => {
  const { name, rating, feedback, company, image } = props.review;
  return (
    <div className="p-4 mb-12 mt-4 text-center bg-white md:w-1/2 mx-auto">
      <div className="testimonial p-4 rounded border border-solid flex  transition-colors duration-300">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
          <img src={image} alt="user" className="w-full h-full object-cover" />
        </div>
        <div>
          <Rating className="text-green-500"
            initialRating={rating}
            readonly
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
          />
          <p className="text-gray-600 py-4">{feedback}</p>
          <div className="text-gray-900 font-bold uppercase mt-6">- {name}</div>
          <div className="text-gray-600">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
