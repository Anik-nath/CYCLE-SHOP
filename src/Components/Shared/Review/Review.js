import React, { useEffect, useState } from 'react';
import Carousel from '../../Carousel/Carousel';
import ReviewCard from './ReviewCard';
const Review = () => {

    const [review,setReviw] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviw(data));
    },[])
    return (
        <>
        <div className="py-10 container mx-auto">
            <h1 className="text-center text-2xl font-semibold text-green-500 uppercase">Testimonials</h1>
            <h1 className="text-center text-gray-600 text-2xl pb-2 ">What our client says</h1>
            <div className="mb-8">
            <Carousel></Carousel>
            </div>
        </div>
        <div className="review bg-gray-100 w-full pb-8">
                <h1 className="text-center py-4 mt-8 text-2xl text-gray-600 font-semibold uppercase">Recent User <span className="text-green-500">Review</span></h1>
                <p className="mb-4 text-center text-gray-400">Latest Feedback From A Gentel Client.Lets See His Review</p>
                <div className="flex">
                {
                    review.slice(-1).map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
                  </div>
            </div>
        </>
    );
};

export default Review;