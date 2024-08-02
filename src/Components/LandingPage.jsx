import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpLong } from 'react-icons/fa6';

function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-20 px-4 md:px-12'>
        {["We Create", "Eye Opening", "Innovations"].map((item, index) => (
          <div className="masker mb-6" key={index}>
            <div className="w-fit flex items-end overflow-hidden">
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76,0,0.24,1], duration:1}} className="w-[9vw] h-[6vw] md:w-[8vw] md:h-[5vw] mt-2 bg-red-500 rounded-md"></motion.div>
              )}
              <h1 className="flex items-center uppercase text-[6vw] md:text-[8vw] h-full leading-[5vw] md:leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex flex-col md:flex-row justify-between items-center py-5 px-4 md:px-12">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="text-sm md:text-base font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-5 md:mt-0">
          <div className="px-3 py-2 border-[2px] border-zinc-500 font-light text-xs md:text-sm capitalize rounded-full">
            Start the project
          </div>
          <div className="w-8 h-8 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
