import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brand = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const allBrands = [
      {
          brandimage : "https://i.ibb.co/ZVJ7kd4/logo-1.jpg"
      },
      {
          brandimage : "https://i.ibb.co/xqzxHgw/logo-2.jpg"
      },
      {
          brandimage : "https://i.ibb.co/C1SJx5G/logo-3.jpg"
      },
      {
          brandimage : "https://i.ibb.co/bKRDz5q/logo-4.jpg"
      },
      {
          brandimage : "https://i.ibb.co/pxNKyFM/logo-5.jpg"
      },
      {
          brandimage : "https://i.ibb.co/JqkGhGq/logo-6.jpg"
      },
      {
          brandimage : "https://i.ibb.co/Q6v5j4q/logo-7.jpg"
      },
      {
          brandimage : "https://i.ibb.co/QJ4JwzV/logo-8.jpg"
      },
  ];

 

  return (
    <div className="container lg:mx-auto lg:px-6 px-4 pt-16 pb-8">
        <div className="text-center pb-12">
            <h1 className="text-3xl font-semibold uppercase">OUR  <span className="text-green-500">Sponsors</span></h1>
            <img className="mx-auto" src="https://i.ibb.co/vXRgmg3/seperator.png" alt="" />
            <p className="w-3/4 mx-auto md:w-full text-gray-700 md:text-lg">We are grateful to have the support of the following sponsors this year</p>
        </div>
      <Carousel responsive={responsive}
       autoPlay={true}
       autoPlaySpeed={2000}
       infinite={true}
       removeArrowOnDeviceType={["tablet","superLargeDesktop", "desktop","mobile"]}
      >
        {
            allBrands.map(brand => (
                <div key={brand.brandimage} className="border ml-1 border-gray-400 p-2 text-white">
                   <img className="w-full md:px-4" src={brand.brandimage} alt="brand" />
                </div>
            ))
        }
      </Carousel>
    </div>
  );
};

export default Brand;
