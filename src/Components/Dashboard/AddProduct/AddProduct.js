import React from 'react';

const AddProduct = () => {
    return (
        <div id="review" className="text-center pt-2">
        <h2 className="text-2xl font-semibold text-green-500">
          Add New Product
        </h2>
        <div className="flex flex-col items-center mt-14">
          <form className="mb-4 mr-6 md:w-2/4 w-full">
            <input
              className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Product name"
              name="name"
            />
            <input
              className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="text"
              placeholder="Product image link"
              name="image"
            />
            <input
              className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              placeholder="price"
              name="price"
            />
            <input
              className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="made"
              type="text"
              placeholder="made"
              name="made"
            />
            <input
              className="text-lg mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="rating"
              type="number"
              max="5" min="1"
              placeholder="rating"
              name="rating"
            />
  
            <textarea
              className="form-textarea p-2 w-full border focus:outline-none"
              rows="5"
              placeholder="Product details"
            ></textarea>
            <button className="bg-green-500 w-full rounded mt-4 hover:bg-green-700 text-white font-bold py-2 px-8 focus:outline-none focus:shadow-outline">
              Add 
            </button>
          </form>
        </div>
      </div>
    );
};

export default AddProduct;