import React from "react";
import Banner from "./Banner/Banner";
import Recommended from "./Recommended/Recommended";
import WhyUs from "./WhyUs/WhyUs";

import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Career from "./Career/Career";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recommended></Recommended>
      <WhyUs></WhyUs>
      <Testimonials></Testimonials>
      <About></About>
      <Blog></Blog>
      <Career></Career>
    </div>
  );
};

export default Home;
