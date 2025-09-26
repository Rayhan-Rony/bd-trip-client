import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutAndBlogCard = () => {
  return (
    <Card className="md:p-2 p-6  border-0 shadow-none pt-8 space-y-4 dark:bg-transparent ">
      <CardDescription className="text-base p-0 text-justify">
        Stop spending countless hours wrestling with spreadsheets and
        researching countless options. Our mission is to transform the complex
        process of travel planning into a simple, exciting collaboration. We go
        beyond generic bookings, tailoring every detail—from finding hidden
        local gems and securing specialized transportation to managing
        personalized budgets—to match your unique vision and style of adventure.
        Let us handle the logistics and the heavy lifting, so you can step off
        the plane knowing your journey is perfectly curated and ready to be
        explored.
      </CardDescription>
      <Button
        variant="outline"
        className="text-secondary hover:text-secondary hover:font-bold hover:cursor-pointer md:w-1/3 w-1/2"
      >
        Learn More <ArrowRight className=""></ArrowRight>
      </Button>
    </Card>
  );
};

export default AboutAndBlogCard;
