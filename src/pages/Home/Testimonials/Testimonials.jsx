import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ReviewsCard from "../../../Components/Cards/ReviewsCard/ReviewsCard";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const Reviews = [
    {
      id: 1,
      name: "Sophia Rahman",
      location: "Dhaka, Bangladesh",
      rating: 5,
      comment:
        "Amazing travel service! Everything was organized perfectly and the team made sure my trip was stress-free. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Arjun Patel",
      location: "Delhi, India",
      rating: 4.5,
      comment:
        "Great experience overall. The booking process was smooth, and the guides were very professional. Would love a little more flexibility in timings.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "London, UK",
      rating: 4,
      comment:
        "I really enjoyed my trip! The destinations were beautiful and well chosen. Customer support was responsive whenever I needed help.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Reviews.length);
      // console.log(setActiveIndex((prev) => (prev + 1) % Reviews.length));
    }, 10000);
    return () => clearInterval(interval);
  }, [Reviews.length]);

  return (
    <div className="bg-primary/10 py-20  ">
      <div className="max-w-7xl mx-auto lg:pb-80 pb-[700px]  ">
        <SectionTitle
          subHeading={"Testimonials"}
          heading={"Customer Reviews"}
          className={"text-center"}
        ></SectionTitle>
        <div className=" relative bg-amber-300">
          <div className="absolute ">
            <img
              src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758910317/h1_quote-1_dackcq.png"
              alt=""
            />
          </div>
          <div className=" ">
            <div className="absolute w-3/5 lg:left-60 left-7 lg:top-0 top-28">
              {Reviews.map((review, index) => (
                <ReviewsCard
                  index={index}
                  activeIndex={activeIndex}
                  review={review}
                  key={review.id}
                ></ReviewsCard>
              ))}
            </div>
          </div>
          <div className="absolute right-0 lg:top-0 top-130">
            <img
              src="https://res.cloudinary.com/dspyka9ei/image/upload/v1758910334/h1_quote-2_uh8iiw.png"
              alt=""
            />
          </div>
          {/* Indicator Dots */}
          <div className="flex space-x-2 mt-6 absolute lg:top-70 top-170 left-2/5 lg:left-150">
            {Reviews.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all  ${
                  index === activeIndex ? "bg-secondary w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
