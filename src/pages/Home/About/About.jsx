import React from "react";
import AboutAndBlogCard from "../../../Components/Cards/AboutAndBlogCard/AboutAndBlogCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 ">
      <div className="flex md:flex-row flex-col gap-16 items-center">
        <div className="flex-1 relative">
          <img
            src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758924285/about_image-1.1_zitrts.png"
            alt=""
          />
          <div className="absolute bottom-0 right-0">
            <img
              src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758925047/about_image-2_md83et.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <SectionTitle
            subHeading={"About"}
            heading={"We Help You Planning Your Journey"}
            className={"text-center"}
          ></SectionTitle>
          <AboutAndBlogCard></AboutAndBlogCard>
        </div>
      </div>
    </div>
  );
};

export default About;
