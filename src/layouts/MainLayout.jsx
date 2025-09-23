import React from "react";

import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default MainLayout;
