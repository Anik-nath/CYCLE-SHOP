import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../../images/banner-1.jpg";
const Banner = () => {
  const banner = {
    background: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={banner}>
      <div className="text-white h-full flex flex-col items-center justify-center">
      <h2 className="text-gray-200 text-xl text-center">Become the world leader of the internet for the sport of Cycling</h2>
        <h1 className="text-6xl py-8 uppercase text-center">Best Cycling Experience</h1>
       <Link to="/products">
       <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
          Explore Shop 
        </button>
       </Link>
      </div>
    </div>
  );
};

export default Banner;
