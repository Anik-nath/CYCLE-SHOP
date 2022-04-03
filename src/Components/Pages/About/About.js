import React from "react";
import { Link } from "react-router-dom";
// import image from "../../../images/banner-3.jpg";
import Brand from "../../Brand/Brand";
import Carousel from "../../Carousel/Carousel";


const About = () => {
  return (
    <>
    {/* banner */}
    <div className="pt-16 mx-auto">
        <div className="head-banner mb-8">
          <div className="container mx-auto">
            <div className="banner-inner flex flex-col justify-center items-center">
              <h1 className="banner-title font-bold text-3xl text-white">
                <span className="uppercase">About Us</span>
              </h1>
              <div className="text-white pt-1">
                <a
                  className="hover:text-green-500 cursor-pointer font-semibold"
                  href="!"
                >
                  Home
                </a>{" "}
                / <span className="text-green-500 font-semibold">About</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* main content */}
    <div className="container max-w-7xl mx-auto px-4 pb-8">
        <div className="text-center pb-12">
            <h1 className="text-3xl font-semibold uppercase">About  <span className="text-green-500">Cyclebd</span></h1>
            <img className="mx-auto" src="https://i.ibb.co/vXRgmg3/seperator.png" alt="" />
            <p className="w-3/4 mx-auto md:w-full text-gray-700 md:text-lg">We are grateful to have the support of the following sponsors this year</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <img className="w-full" src="https://i.ibb.co/Zzf5xvC/about-us-1.jpg" alt="" />
          </div>
          <div className="text-justify">
            <p className="text-lg text-gray-600">
            <strong>We have a fully trained, experienced service department ready to handle all of your bicycle service needs.</strong><br /> 
            The majority of cycling industry workshops employ no more than four staff, with near a quarter employing just one dedicated mechanic, according to the 520 responses here. 21.5% employ two dedicated mechanics, 19.2% stretch to three and 14% rely on a team of four dedicated technicians.
            </p><br />
            <p className="text-lg text-gray-600 hidden">
            Over half of the 543 responses to the PBMA’s survey said that their store footprint measured shy of 3,000 square feet, with 10.5% retailing from a space under 1,000 square feet. As is to be expected, numbers tail off rapidly for store sizes over 5,000 square feet; just 6.5% had the luxury of a footprint ranging between 5,000 to 6,500 square feet. With franchise growth in the U.S.
            </p>

        <div id="process">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-row gap-2 border p-3 items-center">
              <i className="fas fa-briefcase fa-fade text-green-500 text-2xl"></i>
              <h3 className="uppercase text-lg">QUALITY SERVICE</h3>
            </div>
            <div className="flex flex-row gap-2 border p-3 items-center">
              <i className="fas fa-users text-green-500 text-2xl"></i>
              <h3 className="uppercase text-lg">Certified staff</h3>
            </div>
            <div className="flex flex-row gap-2 border p-3 items-center">
              <i className="fas fa-plus text-green-500 text-2xl"></i>
              <h3 className="uppercase text-lg">COST EFFECTIVE</h3>
              
            </div>
            <div className="flex flex-row gap-2 border p-3 items-center">
              <i className="fa fa-cog fa-spin text-green-500 text-2xl"></i>
              <h3 className="uppercase text-lg">24/7 SUPPORT</h3>
            </div>
          </div>
        </div>

            <Link to="/products">
              <button className="bg-green-500 mt-8 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Go To Shop
              </button>
            </Link>
          </div>
        </div>
    </div>
       <div className="bg-gray-100 pb-4">
       <div className="pt-10 container mx-auto">
       <div className="text-center pb-12">
            <h1 className="text-3xl font-semibold uppercase">Customer  <span className="text-green-500">Reviews</span></h1>
            <img className="mx-auto" src="https://i.ibb.co/vXRgmg3/seperator.png" alt="" />
            <p className="w-3/4 mx-auto md:w-full text-gray-700 md:text-lg">What people are saying about us, repair process and their satisfaction.</p>
        </div>
            <div className="mb-8">
            <Carousel></Carousel>
            </div>
        </div>
       </div>
        <Brand></Brand>
    </>
  );
};

export default About;
