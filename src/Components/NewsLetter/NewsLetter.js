import React from 'react';

const NewsLetter = () => {
    return (
        <div className='bg-green-500 mt-14'>
            <div className="container mx-auto py-4 px-6 flex md:flex-row flex-col justify-between items-center gap-x-8 gap-y-4" >
                <div className='w-full flex flex-row gap-2 items-center'>
               <div className='icon border px-2 py-1 text-gray-600'>
               <i className="fas fa-envelope text-3xl text-white"></i>
               </div>
               <div className='title text-white'>
               <h1 className='text-xl font-semibold'>SIGN UP & GET OFFER</h1>
                <p className='text-md'>Lorem ipsum dolor sit amet.</p>
               </div>
                </div>
                <div className="flex flex-row w-full bg-white p-2">
                <input className='w-full px-4 py-2 text-md' type="text" placeholder='Enter your email'/>
                <button className='myBlack-color py-2 font-semibold text-white px-4'>Subscribe</button>
                </div>
                <div className='w-full flex items-center justify-between border p-1 text-white'>
                   <div className='px-4'>
                       <h2 className='text-2xl font-semibold'>Get Discount</h2>
                       <p className='text-md'>on any of our  product</p>
                   </div>
                   <div className='myBlack-color px-6 py-2 flex flex-col font-semibold items-center text-white'>
                       <h2 className='text-md uppercase'>Get</h2>
                       <h1 className='text-2xl '>10%</h1>
                       <h3 className='uppercase'>OFF</h3>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
//https://themeforest.net/search/bicycle%20shop