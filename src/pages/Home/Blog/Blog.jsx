import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import BlogCard from "../../../Components/Cards/BlogCard/BlogCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Hidden Gems of Old Dhaka",
      description:
        "Discover the authentic taste of traditional Dhaka cuisine and explore the historical architecture of the old town.",
      author: "Ayesha Siddika",
      date: "2024-09-15",
      imageUrl:
        "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
      category: "Culture & Heritage",
    },
    {
      id: 2,
      title: "Beautiful Travel at Low Cost: Budget Tips",
      description:
        "Expert tips on how to significantly reduce costs on flights and accommodation while still enjoying a premium travel experience.",
      author: "Fahim Reza",
      date: "2024-08-28",
      imageUrl:
        "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
      category: "Planning",
    },
    // {
    //   id: 3,
    //   title: "The Silence of the Sundarbans: Slow Travel",
    //   description:
    //     "Avoid the rush and dive deep into nature. Our comprehensive guide for an immersive, slow experience in the mangrove forest.",
    //   author: "Sushmita Roy",
    //   date: "2024-08-01",
    //   imageUrl:
    //     "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
    //   category: "Nature",
    // },
    // {
    //   id: 4,
    //   title: "Essential Gear for Any Weather",
    //   description:
    //     "Your checklist of must-have items for year-round travel, covering diverse Bangladeshi climates, from humid jungles to mountain peaks.",
    //   author: "Shamim Ahmed",
    //   date: "2024-07-20",
    //   imageUrl:
    //     "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
    //   category: "Travel Tips",
    // },
    // {
    //   id: 5,
    //   title: "Cox's Bazar: From Beach to Hills in One Day",
    //   description:
    //     "A quick 24-hour itinerary to enjoy the contrasting beauty of Bangladesh's longest sea beach and the nearby mountainous regions.",
    //   author: "Mehzabin Haque",
    //   date: "2024-07-05",
    //   imageUrl:
    //     "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
    //   category: "Destinations",
    // },
    // {
    //   id: 6,
    //   title: "Solo Travel: Strategies for Conquering Fear",
    //   description:
    //     "Practical advice and motivational stories for first-time solo travelers looking to embrace independence and freedom on the road.",
    //   author: "Tanvir Islam",
    //   date: "2024-06-18",
    //   imageUrl:
    //     "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
    //   category: "Lifestyle",
    // },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          heading={"Travel Tips and Advice"}
          subHeading={"Our blog"}
          className={"text-center"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 pt-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <Button className="bg-secondary/90 text-white hover:bg-secondary   hover:font-bold">
            Read All Blogs <ArrowRight className=""></ArrowRight>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
