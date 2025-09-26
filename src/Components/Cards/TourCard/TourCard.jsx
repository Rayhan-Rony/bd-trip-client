import React from "react";
import {
  MapPin,
  Calendar,
  User,
  Star,
  StarHalf,
  Heart,
  ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const TourCard = ({ tour }) => {
  const { title, destination, price, description, days, maxParticipants } =
    tour;
  return (
    <Card className="p-0 pb-6 group flex flex-col justify-between">
      <CardHeader className="flex flex-col p-0 rounded-md ">
        <div className="relative overflow-hidden rounded-md">
          <img
            className="rounded-md group-hover:scale-105 transition-all duration-300"
            src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758657016/160afaab71c156760807edc34ebb939c_kh6dfw.jpg"
            alt=""
          />
          <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-secondary"></div>
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart
              size={20}
              className="text-white hover:text-primary transition-colors duration-200"
            />
          </div>
        </div>

        <CardAction className=" w-11/12 mx-auto -mt-5 bg-white dark:bg-[#171717] py-4 px-3 rounded-md shadow-xl z-20">
          <div className="flex justify-between ">
            <div className="flex gap-4 justify-center items-center">
              <div className="flex justify-center items-center gap-1  ">
                <Calendar size={20} className=" text-primary"></Calendar>
                {days > 1 ? `${days} days` : `${days} day`}
              </div>
              <div className="flex justify-center items-center gap-1">
                <User size={20} className=" text-primary"></User>
                <p>{maxParticipants}</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">
              {[...Array(4)].map((n, i) => (
                <Star
                  className="fill-primary text-primary "
                  key={i}
                  size={16}
                ></Star>
              ))}
              <StarHalf
                className="fill-primary text-primary"
                size={16}
              ></StarHalf>
            </div>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <CardDescription className="space-y-3">
          <CardTitle className="text-2xl text-secondary">{title}</CardTitle>
          <div className="text-base">{description}</div>
          <div className="flex  items-center gap-3">
            <MapPin className="text-primary "></MapPin>
            <p> {destination}</p>
          </div>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <h2 className="flex flex-col">
          From{" "}
          <span className="text-2xl text-primary font-extrabold ">
            ৳ {price}
          </span>
        </h2>
        <Button
          variant="outline"
          className="text-secondary hover:text-secondary hover:font-bold hover:cursor-pointer"
        >
          Explore More
          <ArrowRight className=""></ArrowRight>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TourCard;
