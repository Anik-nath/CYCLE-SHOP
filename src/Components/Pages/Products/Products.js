import React, { useEffect, useState } from "react";
import OurCard from "../../Shared/OurCard/OurCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://blooming-dawn-18027.herokuapp.com/cycles")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-24">
      <h2 className="text-center text-3xl font-semibold py-8 uppercase">
        <span className="text-green-500">All</span> Products
      </h2>
  
      <div className="container max-w-6xl mx-auto px-4">
      {
        products.length === 0 ? ( 
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-green-500"></div>
      </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {products.map((products) => (
            <OurCard products={products} key={products._id}>
              {products.name}
            </OurCard>
          ))}
          </div>
          
        )
      }
        
      </div>
    </div>
  );
};

export default Products;
