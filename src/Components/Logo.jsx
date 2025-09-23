import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="w-12 h-12">
        <img src={logo} alt="logo" />
      </div>
      <h2 className="text-3xl font-extrabold">Bd Trip</h2>
    </div>
  );
};

export default Logo;
