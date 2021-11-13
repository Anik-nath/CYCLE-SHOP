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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            rem vitae delectus doloremque. Officiis eaque accusantium odio ad
            hic veritatis exercitationem, eius explicabo mollitia atque id totam
            facere accusamus voluptatibus!
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
