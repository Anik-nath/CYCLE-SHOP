import React, { useState } from 'react';
import { toast } from "react-toastify";

const NewsLetter = () => {
    toast.configure()

    const [data,setData] = useState({})

    const handleInput = (e) =>{
        const field = e.target.name;
        const value= e.target.value;
        const newField = {...data};
        newField[field] = value;
        setData(newField);
    }

    const handleSubmit = (e) => {
       const subscribeData = {
        //    ...data,
           subscribedEmail : data?.email
       }
       fetch("http://localhost:5000/subscribeEmail",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscribeData),
       })
       .then((res) => res.json())
       .then((data) => {
        if(data.insertedId){
            toast("Success! Thankes for Subscribed", { type: "success" });
            
        }
        else {
            toast("Something went wrong", { type: "error" });
          }
       });
       e.preventDefault();
    };

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
                <form onSubmit={handleSubmit}  className="flex flex-row w-full bg-white p-2">
                <input pattern=".+@gmail\.com" required name='email' onBlur={handleInput} className='w-full px-4 py-2 text-md' type="email" placeholder='Enter your email'/>
                <button type='submit' className='myBlack-color py-2 font-semibold text-white px-4'>Subscribe</button>
                </form>
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