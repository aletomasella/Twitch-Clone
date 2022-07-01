import React from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import IconBar from "./IconBar";
import LiveChannels from "./LiveChannels";

const Main = () => {
  return (
    <>
      <div id="hero" className="absolute left-[64px] xl:left-[235px]">
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
      </div>
    </>
  );
};

export default Main;
