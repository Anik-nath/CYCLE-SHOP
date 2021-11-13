import React, { useEffect, useState } from "react";
import OurCard from "../../Shared/OurCard/OurCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cycles")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-24">
      <h2 className="text-center text-3xl font-semibold py-8 uppercase">
        <span className="text-green-500">All</span> Products
      </h2>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
          {products.map((products) => (
            <OurCard products={products} key={products._id}>
              {products.name}
            </OurCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
