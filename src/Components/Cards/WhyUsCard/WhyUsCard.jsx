import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const WhyUsCard = ({ title, description, icon }) => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-3 ">
      <div>
        <Avatar className="bg-white flex items-center justify-center  w-20 h-20">
          <AvatarImage></AvatarImage>
          <div className="text-primary">{icon}</div>
        </Avatar>
      </div>
      <div className="space-y-3">
        <h4 className="text-xl font-medium dark:text-black">{title}</h4>
        <p className="text-gray-800 dark:text-gray-800 ">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
