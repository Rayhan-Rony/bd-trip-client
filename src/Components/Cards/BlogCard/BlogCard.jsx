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
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
const BlogCard = ({ blog }) => {
  const { title, description, author, date, imageUrl, category } = blog;
  return (
    <Card className="flex  gap-0 lg:flex-row flex-col  p-0 shadow-none border-0 items-center dark:bg-transparent">
      <div className="flex-1 ">
        <img className="rounded-xl " src={imageUrl} alt="" />
      </div>

      <CardContent className="flex-1  space-y-5  ">
        <CardHeader className="p-0 ">
          <Badge className="dark:text-white">{category}</Badge>
          <CardTitle className="text-2xl hover:text-primary hover:cursor-pointer">
            {title}
          </CardTitle>
        </CardHeader>

        <CardDescription className="line-clamp-3 text-base ">
          {description}
        </CardDescription>

        <CardFooter className="p-0 flex  justify-between ">
          <p className="flex lg:gap-1 gap-2 lg:text-sm">
            <Calendar size={20} className=" text-primary "></Calendar> {date}
          </p>
          <p className="lg:text-sm">
            {" "}
            By <span className="text-primary">{author}</span>
          </p>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
