import React from "react";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden w-full pt-[56.25%] ml-5">
        <iframe
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full"
          src="https://www.youtube.com/embed/CBFFbLEJfg4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Hero;
