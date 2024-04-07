import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const { cycleId } = useParams();
  const [details, setDetails] = useState([]);
  const [data, setData] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://cycle-shop-api-server.onrender.com/cycles/${cycleId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [cycleId]);

  const handleField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newField = { ...data };
    newField[field] = value;
    setData(newField);
  };

  const handleOrder = (e) => {
    const order = {
      ...data,
      name: data?.firstname,
      cycleName: details?.name,
      address: data?.address,
      phone: data?.phone,
      date: new Date().toLocaleDateString(),
    };
    
    fetch("https://cycle-shop-api-server.onrender.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("accept your order");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="pt-24">
      <div className="flex md:flex-row flex-col gap-6 md:p-12 p-8">
        <div className="cycleInfo w-full md:w-1/2">
          <div className="imageContainer mb-8">
            <img className="w-full" src={details.img} alt="" />
          </div>
          <div className="information">
            <h1 className="text-3xl font-semibold uppercase">
              name : {details.name}
            </h1>
            <div className="text-green-500" id="rating">
              <span className="text-gray-500">Rating : </span>
              <Rating
                initialRating={details.rating}
                readonly
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              />
            </div>
            <p className=" text-justify md:text-light my-6 text-gray-500">
              {details.details}
            </p>
            <p className="text-green-500 text-2xl font-semibold md:text-3xl">
              RS: {details.price}
            </p>
            <button
              className="border border-green-500 mt-4 hover:bg-green-500 hover:text-white p-2 px-4 rounded"
              type="button"
            >
              <i className="fas fa-shopping-cart"></i> Add To Cart
            </button>
            {/* checkout button */}
            <button
              className="border ml-2 border-green-500 mt-4 hover:bg-green-500 hover:text-white p-2 px-4 rounded"
              type="button"
            >
              <i className="fas fa-shopping-cart"></i> Checkout Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 my-8 md:my-0">
          <form className="shadow p-6" action="">
            <h1 className="text-3xl font-semibold mb-4">Purchase Your Cycle</h1>
            <div className="flex gap-4">
              <div className="mb-4 w-1/2">
                <input
                  className="text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  name="firstname"
                  onBlur={handleField}
                  placeholder="firstname"
                  required
                />
              </div>
              <div className="mb-4 w-1/2">
                <input
                  className="text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  name="lastname"
                  required
                  onBlur={handleField}
                  placeholder="lastname"
                />
              </div>
            </div>
            <div className="mb-4">
              <input
                className="text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                required
                onBlur={handleField}
                defaultValue={user.email}
              />
            </div>
            <div className="mb-4">
              <input
                className="text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                name="phone"
                required
                onBlur={handleField}
                placeholder="phone"
              />
            </div>

            <div className="mb-4">
              <input
                className="text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                required
                onBlur={handleField}
                placeholder="address"
              />
            </div>
            <div className="mb-4">
              <input
                className="text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                name="city"
                required
                onBlur={handleField}
                placeholder="city/town"
              />
            </div>
            <button
              onClick={handleOrder}
              className="border border-green-500 mt-4 hover:bg-green-500 hover:text-white p-2 px-4 rounded"
              type="button"
            >
              <i className="fas fa-shopping-basket"></i> Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
