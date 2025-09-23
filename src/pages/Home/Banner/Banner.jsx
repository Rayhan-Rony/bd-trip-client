import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  const imageLinks = [
    "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656698/GettyImages-1438954277_HEADER_Saint_Martin_Michelin_lzabls.jpg",
    "https://res.cloudinary.com/dspyka9ei/image/upload/v1758656961/665b3544e4047_u5rdu9.png",
    "https://res.cloudinary.com/dspyka9ei/image/upload/v1758657016/160afaab71c156760807edc34ebb939c_kh6dfw.jpg",
  ];
  return (
    <div className="relative">
      <div>
        <div className="absolute md:left-1/2 md:top-1/2 top-30 left-0 text-white text-center z-40    md:-translate-1/2  space-y-4 ">
          {/* -translate-x-1/2 / -translate-y-1/2 move the element left or top by 50% of its own width.When we position something with left-1/2 / top-1/2, the left/top edge of the element is placed at the middle of the parent.But usually we want the center of the element to be aligned with the center of the parent.That’s why we also apply -translate-x-1/2 / -translate-y-1/2.It shifts the element left/top by half of its own width, so the element becomes perfectly centered horizontally/vertically. Or if we need both -translate-1/2 is the solution for centering the content */}
          <h1 className="lg:text-7xl md:text-5xl text-4xl  font-extrabold ">
            Enjoy your stay
          </h1>
          <h4 className="lg:text-2xl text-xl ps-2 font-medium">
            Discover amazing places at exclusive deals
          </h4>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 2000, // time in ms between slides
        }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={5000} // transition duration between slides
        // autoplay={true}
        loop={true}
        modules={[Autoplay, EffectFade]}
        // black background is working for blackish overlay when fade effect works
        className="mySwiper bg-black"
      >
        {imageLinks.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-[70vh]"
              src={imgUrl}
              alt={`${"slide"} ${index + 1} `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
