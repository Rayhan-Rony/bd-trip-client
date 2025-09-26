import React from "react";
import Banner from "./Banner/Banner";
import Recommended from "./Recommended/Recommended";
import WhyUs from "./WhyUs/WhyUs";

import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recommended></Recommended>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
