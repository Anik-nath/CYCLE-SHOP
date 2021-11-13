import React from "react";
import { Link } from "react-router-dom";
import image from "../../../images/banner-3.jpg";

const About = () => {
  return (
    <div className="pt-24 container max-w-6xl mx-auto px-4">
      <h2 className="text-center text-3xl font-semibold py-8 uppercase">
        <span className="text-green-500">About</span> Us
      </h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="text-justify">
          <p className="text-lg text-gray-600">
          Over half of the 543 responses to the PBMA’s survey said that their store footprint measured shy of 3,000 square feet, with 10.5% retailing from a space under 1,000 square feet. As is to be expected, numbers tail off rapidly for store sizes over 5,000 square feet; just 6.5% had the luxury of a footprint ranging between 5,000 to 6,500 square feet. With franchise growth in the U.S.
          </p><br />
          <p className="text-lg text-gray-600">
          <strong>How many staff work in your service department? </strong><br /> 
          The majority of cycling industry workshops employ no more than four staff, with near a quarter employing just one dedicated mechanic, according to the 520 responses here. 21.5% employ two dedicated mechanics, 19.2% stretch to three and 14% rely on a team of four dedicated technicians.
          </p>
          <Link to="/products">
            <button className="bg-green-500 mt-8 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
              Go To Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
