import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../../../../images/banner-1.jpg";
import { Typewriter} from 'react-simple-typewriter'

const Banner = () => {
  const banner = {
    background: `url(${bannerImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width:"100%",
    height: "100vh",
  };
  return (
    <div style={banner}>
      <div className="text-white h-full flex flex-col items-center justify-center">
      <h2 className="text-gray-200 md:w-full w-3/4 text-xl text-center">Become the world leader of the internet for the sport of Cycling</h2>
        <h1 className="md:text-6xl text-5xl py-8 uppercase text-center">Best Cycling
      <span className="text-green-500">
        <Typewriter
            words={[' Experience']}
            loop={Infinity}
            cursor
            cursorStyle='!'
            typeSpeed={100}
            deleteSpeed={120}
            delaySpeed={3000}
          />
</span>
        </h1>
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
