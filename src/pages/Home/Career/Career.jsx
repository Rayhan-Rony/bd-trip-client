import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Career = () => {
  return (
    <section className="bg-primary/10 py-20">
      <div className="max-w-7xl mx-auto xl:px-0 px-2 ">
        <SectionTitle
          heading={"Become a Guide"}
          subHeading={"Career"}
          className={"text-center"}
        ></SectionTitle>
        <div className="flex md:flex-row-reverse  flex-col items-center gap-20">
          <div className="flex-1">
            <img
              src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758930017/hero-image-f05fa7603c13424bf5647301a15fb23d978c96bf8158c4c8a442ed14536a4d7f_beesb5.png"
              alt=""
            />
          </div>
          <div className="flex-1 space-y-5 md:px-0 px-2">
            <h2 className="text-2xl font-bold">
              Be Adventurers and Explore...
            </h2>
            <p className="text-muted-foreground">
              We are always looking for passionate local experts, photographers,
              and adventurers to join our global network. Share your unique
              knowledge and earn money guiding travelers through the places you
              know best.
            </p>
            <Button
              variant="outline"
              className="text-secondary hover:text-secondary hover:font-bold hover:cursor-pointer md:w-1/3 w-1/2"
            >
              Apply Now <ArrowRight className=""></ArrowRight>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
