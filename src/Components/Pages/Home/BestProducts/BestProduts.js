import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OurCard from "../../../Shared/OurCard/OurCard";

const BestProduts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://blooming-dawn-18027.herokuapp.com/cycles")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="py-8">
      <div className="text-center pb-12">
            <h1 className="text-3xl font-semibold uppercase"> <span className="text-green-500">Featured</span> Products</h1>
            <img className="mx-auto" src="https://i.ibb.co/vXRgmg3/seperator.png" alt="" />
            <p className="w-3/4 mx-auto md:w-full text-gray-700 md:text-lg">We are grateful to have the support of the following sponsors this year</p>
        </div>
        <div className="container mx-auto px-4">
          {
            products.length === 0 ? ( 
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-green-500"></div>
              </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {products.slice(0, 4).map((products) => (
                    <OurCard products={products} key={products._id}>
                      {products.name}
                    </OurCard>
                  ))}
                </div>
                )
          }
         
          <div className="text-center py-10">
            <Link to="/products">
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
                See all
              </button>
            </Link>
          </div>
        </div>
      
    </div>
  );
};

export default BestProduts;
