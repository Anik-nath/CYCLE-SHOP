import React from 'react';

const FeaturedDetails = () => {
    return (
        <div>
            <div className="container lg:mx-auto px-6 py-14 mt-4">
            <div className="flex lg:flex-row flex-col gap-4">
                <div className='w-full'>
                    <img className='w-full' src="https://i.ibb.co/cJSf8ZR/about-images.jpg" alt="cycle" />
                </div>
                <div className='w- lg:pl-14'>
                    <h1 className='md:text-4xl text-2xl pb-6 md:w-2/4 font-semibold break-words'>Best Adventure Tourer Bikes</h1>
                    <p className='text-lg pb-6 font-light text-justify'>Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable sourceand going through.</p>
                    <div className='grid grid-cols-3 gap-6'>
                        <img className='w-full' src="https://i.ibb.co/6YWQ0mx/about-1.jpg" alt="" />
                        <img className='w-full' src="https://i.ibb.co/yhP5PDQ/about-2.jpg" alt="" />
                        <img className='w-full' src="https://i.ibb.co/tbbcp4d/about-3.jpg" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedDetails;