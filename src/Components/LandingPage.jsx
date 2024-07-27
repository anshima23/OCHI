import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76,0,0.24,1], duration:1}} className="w-[9vw] h-[6vw] mt-2 bg-red-500 rounded-md"></motion.div>
              )}
              <h1 className="flex items-center uppercase text-[9vw] h-full leading-[7vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 font-ligth text-sm capitalize rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
