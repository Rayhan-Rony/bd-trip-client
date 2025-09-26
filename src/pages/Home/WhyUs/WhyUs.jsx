import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Globe2,
  MapPin,
  ShieldCheck,
  BadgeDollarSign,
  Timer,
  Flame,
} from "lucide-react";
import WhyUsCard from "../../../Components/Cards/WhyUsCard/WhyUsCard";

const WhyUs = () => {
  const cardsData = [
    {
      title: "Best Travel Agent",
      description:
        "Your trusted partner for unforgettable journeys, offering personalized travel planning, exclusive deals, and seamless adventures across the globe.",
      icon: <Globe2 size={50}></Globe2>,
    },
    {
      title: "Beautiful Places",
      description:
        "Discover breathtaking destinations worldwide, from exotic beaches to stunning mountains, with curated travel guides and hidden gems.",
      icon: <MapPin size={50}></MapPin>,
    },
    {
      title: "Trust & Safety",
      description:
        "Your safety and trust are our top priorities, with secure payments, reliable services, and verified partners across the globe.",
      icon: <ShieldCheck size={50}></ShieldCheck>,
    },
    {
      title: "Passionate Travel",
      description:
        "Our team is passionate about travel and dedicated to crafting memorable journeys filled with unique experiences you’ll cherish forever.",
      icon: <Flame size={50}></Flame>,
    },
    {
      title: "Best Price Guarantee",
      description:
        "We ensure the lowest prices on all travel packages, giving you peace of mind that you’re getting the very best deals",
      icon: <BadgeDollarSign size={50}></BadgeDollarSign>,
    },
    {
      title: "Fast Booking",
      description:
        "Experience lightning-fast booking with our user-friendly system, allowing you to secure your dream vacation in just a few clicks",
      icon: <Timer size={50}></Timer>,
    },
  ];
  return (
    <section
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dspyka9ei/image/upload/v1758804824/sunrise-view_ytxcfr.jpg)",
      }}
      className="py-20 bg-no-repeat bg-cover bg-fixed"
    >
      <div className="max-w-7xl mx-auto ">
        <SectionTitle
          subHeading="Why Us"
          heading="We Make All The Process Easy"
          className="text-center"
        ></SectionTitle>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 pt-10">
          {cardsData.map((card) => (
            <WhyUsCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon}
            ></WhyUsCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
