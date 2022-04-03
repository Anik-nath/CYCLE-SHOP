import React from "react";
import Brand from "../../Brand/Brand";
import FeaturedDetails from "../../FeaturedDetails/FeaturedDetails";
import Review from "../../Shared/Review/Review";
import Banner from "./Banner/Banner";
import BestProduts from "./BestProducts/BestProduts";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <FeaturedDetails></FeaturedDetails>
      <BestProduts></BestProduts>
      <Review></Review>
      <Brand></Brand>
    </div>
  );
};

export default Home;
