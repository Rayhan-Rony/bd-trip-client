import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <SectionTitle
        subHeading={"Connect Us"}
        heading={"Upcoming Events"}
        className={"text-center"}
      ></SectionTitle>
      <div className="flex md:flex-row flex-col-reverse  lg:px-0 px-2 md:items-center lg:gap-10 md:gap-5 gap-4 pt-10">
        <div className="flex-1  ">
          <div className="flex  flex-col  items-center ">
            <div>
              <img
                src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758933597/incoming-e-mail-notify-online-mail-concept-unread-mail-notification-newsletter-new-message-alert-3d-rendering-illustration-png_ek6k6w.webp"
                alt=""
              />
            </div>
            <div className="w-full lg:mt-0 xl:mt-0 md:mt-5 mt-0 ">
              <Input className="w-full" type="email" placeholder="Email" />
            </div>
            <Button
              variant="outline"
              className="text-secondary hover:text-secondary hover:font-bold hover:cursor-pointer md:w-1/3 w-full mt-8 md:hidden  block"
            >
              Subscribe <ArrowRight className="inline-block"></ArrowRight>
            </Button>
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <h1 className="text-2xl font-bold">
            Unlock Exclusive Travel Secrets
          </h1>
          <p className="text-muted-foreground">
            Go beyond the guidebook. Subscribe to our weekly newsletter to
            receive curated destination insights, flash deals on local tours,
            early access to new routes, and expert planning tips delivered
            straight to your inbox. Don't miss out on the best of Bangladesh and
            beyond.
          </p>
          <Button
            variant="outline"
            className="text-secondary hover:text-secondary hover:font-bold hover:cursor-pointer md:w-1/3 w-1/2 lg:mt-13 md:mt-0 md:block hidden"
          >
            Subscribe <ArrowRight className="inline-block"></ArrowRight>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
