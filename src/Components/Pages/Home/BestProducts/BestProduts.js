import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OurCard from "../../../Shared/OurCard/OurCard";

const BestProduts = () => {
  const [products, setProducts] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold py-8 uppercase">
        <span className="text-red-400">Featured</span> Products
      </h2>
      <div className="flex justify-center items-center">
        {isloading && (
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        )}
      </div>
      {!isloading && (
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {products.slice(0, 6).map((products) => (
              <OurCard products={products} key={products.id}>
                {products.name}
              </OurCard>
            ))}
          </div>
          <div className="text-center py-10">
            <Link>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
                See all
              </button>
            </Link>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default BestProduts;
