import React from "react";
import Banner from "./Banner/Banner";
import Recommended from "./Recommended/Recommended";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recommended></Recommended>
      <WhyUs></WhyUs>
    </div>
  );
};

export default Home;
