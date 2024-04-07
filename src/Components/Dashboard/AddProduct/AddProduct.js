import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [data, setData] = useState({});

  const handleField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newField = { ...data };
    newField[field] = value;
    setData(newField);
    console.log(newField);
  };

  const handleAdd = (e) => {
    const cycle = {
      ...data,
      name: data?.name,
      made: data?.made,
      rating: data?.rating,
      price: data?.price,
      img: data?.image,
      details: data?.details,
    };

    fetch("https://cycle-shop-api-server.onrender.com/cycles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cycle),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("You added a new Product");
        }
      });

    e.preventDefault();
  };

  return (
    <div id="review" className="text-center pt-2">
      <h2 className="text-2xl font-semibold text-green-500">Add New Product</h2>
      <div className="flex flex-col items-center mt-14">
        <form onSubmit={handleAdd} className="mb-4 mr-6 md:w-2/4 w-full">
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Product name"
            name="name"
            required
            onBlur={handleField}
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="text"
            placeholder="Product image link"
            name="image"
            required
            onBlur={handleField}
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="text"
            placeholder="price"
            name="price"
            required
            onBlur={handleField}
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="made"
            type="text"
            placeholder="made in"
            name="made"
            required
            onBlur={handleField}
          />
          <input
            className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rating"
            type="number"
            max="5"
            min="1"
            placeholder="rating"
            name="rating"
            required
            onBlur={handleField}
          />

          <textarea
            className="form-textarea p-2 w-full border focus:outline-none"
            id="details"
            rows="5"
            placeholder="Product details"
            name="details"
            required
            onBlur={handleField}
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 w-full rounded mt-4 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline"
          >
            Add Cycle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
