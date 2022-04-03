import React, { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://blooming-dawn-18027.herokuapp.com/cycles")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //delete
  const hanndleDelete = (id) => {
    const wantToDelete = window.confirm("Are sure you?");
    if (wantToDelete) {
      const url = `https://blooming-dawn-18027.herokuapp.com/cycles/${id}`;
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted succesfuly");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="text-center text-xl font-semibold py-8 uppercase">
        <span className="text-green-500">Manage</span> Products
      </h2>
      <div className="container max-w-6xl mx-auto px-4">
        {products.length === 0 ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-28 w-28 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4">
            {products.map((products) => (
              <li className="list-none" key={products._id}>
                <div className="border border-gray-200 p-4 rounded">
                  <img className="mb-2" src={products.img} alt="" />
                  <h1>Name : {products.name}</h1>
                  <h1>Price : {products.price}</h1>
                  <h1>From : {products.made}</h1>
                  <div className="flex gap-4 py-4">
                    <button className="px-4 py-1 text-sm text-whitebg-green-500 rounded">
                      <i className="far fa-edit"></i> Edit
                    </button>
                    <button
                      onClick={() => hanndleDelete(products._id)}
                      className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                    >
                      <i className="fas fa-trash-alt"></i> Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
