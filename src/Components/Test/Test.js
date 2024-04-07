import React from "react";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Test = () => {
    toast.configure()
  const [product] = useState({
    name: "Sample Book",
    price: 120,
    description: "This is a sample book",
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://cycle-shop-api-server.onrender.com/checkout",
      { token, product }
    );
 
    console.log(response.status)
 
    if (response.status === 200) {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return <div className="container mx-auto pt-20">

<div className="">
      <div>
        <h1 className="text-center text-black">Stripe Checkout</h1>
        <br />
        <h2 className="text-center">Product Info</h2>
        <h3 className="text-center">Product Name: {product.name}</h3>
        <h3 className="text-center">Product Price: {product.price}</h3>
        <h3 className="text-center">
          Product Description: {product.description}
        </h3>
        <br />
        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51JvoRLD2rkmj0KzmEccfs6kTTwyoDUFMHJT2cTPrr2FfdU1uiOStJhWg7JV0yfzllGYNWA6hIz4Me4ku4kMODYYH00uyaBzwWi"
            token={handleToken}
            amount={product.price * 100}
            name="Sample Book"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>

  </div>;
};

export default Test;
