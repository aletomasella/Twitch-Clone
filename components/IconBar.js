import Image from "next/image";
import React from "react";
import headphones from "../public/assets/headphones.png";
import mic from "../public/assets/mic.png";
import paint from "../public/assets/paint.png";
import remote from "../public/assets/remote.png";
import trophy from "../public/assets/trophy.png";

const IconBar = () => {
  return (
    <>
      <div className="p-2 md:p-8">
        {/* Container  */}
        <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8">
          {/* Grid  */}
          <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded-full">
            <p className="text-2xl font-bold">Games</p>
            <Image src={remote} alt="/" />
          </div>
          <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded-full">
            <p className="text-2xl font-bold">IRL</p>
            <Image src={mic} alt="/" />
          </div>
          <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded-full">
            <p className="text-2xl font-bold">Music</p>
            <Image src={headphones} alt="/" />
          </div>
          <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded-full">
            <p className="text-2xl font-bold">Esports</p>
            <Image src={trophy} alt="/" />
          </div>
          <div className="w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded-full">
            <p className="text-2xl font-bold">Creative</p>
            <Image src={paint} alt="/" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IconBar;
