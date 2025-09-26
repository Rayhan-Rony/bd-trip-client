import React from "react";
import { Star } from "lucide-react";
import { Card, CardFooter, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ReviewsCard = ({ review, index, activeIndex }) => {
  const { name, location, rating, comment, image } = review;

  const star = Math.floor(rating);

  return (
    <Card
      className={`bg-transparent border-0 shadow-none absolute w-full transition-transform duration-700 ease-in-out ${
        index === activeIndex
          ? "translate-x-0 opacity-100"
          : "-translate-x-full opacity-0"
      }`}
    >
      <CardTitle className="md:text-3xl text-xl">"{comment}"</CardTitle>
      <CardFooter className="flex lg:flex-row flex-col gap-4 justify-center">
        <div>
          <Avatar className="h-24 w-24">
            <AvatarImage src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758655233/main-sample.png" />
            <AvatarFallback>{name}</AvatarFallback>
          </Avatar>
        </div>
        <div className=" space-y-2">
          <p className="flex">
            {[...Array(star)].map((_, index) => (
              <Star key={index} className="text-primary fill-primary"></Star>
            ))}
          </p>
          <p className="font-semibold text-secondary"> {name}</p>
          <p> {location}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewsCard;
