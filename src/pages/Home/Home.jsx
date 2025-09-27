import React from "react";
import Banner from "./Banner/Banner";
import Recommended from "./Recommended/Recommended";
import WhyUs from "./WhyUs/WhyUs";

import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Career from "./Career/Career";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Recommended></Recommended>
      <WhyUs></WhyUs>

      <About></About>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <Career></Career>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
