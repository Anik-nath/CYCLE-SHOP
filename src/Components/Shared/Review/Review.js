import React from 'react';
import Carousel from '../../Carousel/Carousel';
const Review = () => {
    return (
        <div className="pt-24 container mx-auto">
            <h1 className="text-center text-2xl font-semibold text-green-500 uppercase">Testimonials</h1>
            <h1 className="text-center text-3xl pb-8">What our client says</h1>
            <div className="my-8">
            <Carousel></Carousel>
            </div>
        </div>
    );
};

export default Review;