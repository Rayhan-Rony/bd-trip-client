import React from "react";

const SectionTitle = ({ subHeading, heading, className }) => {
  return (
    <div className={`${className} space-y-4 relative`}>
      <h3 className="caveat text-4xl text-destructive">{subHeading}</h3>
      <h2 className="md:text-5xl text-3xl font-bold">{heading}</h2>
      {/* Background watermark text */}
      <h2 className="absolute inset-0 flex pt-1 items-center justify-center md:text-6xl text-4xl font-extrabold text-gray-400 opacity-20 select-none">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
