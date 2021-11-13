import React from "react";
import Review from "../../Shared/Review/Review";
import Banner from "./Banner/Banner";
import BestProduts from "./BestProducts/BestProduts";


const Home = () => {

  return (
    <div className="">
      <Banner></Banner>
	  <BestProduts></BestProduts>
    <Review></Review>
    </div>
  );
};

export default Home;
