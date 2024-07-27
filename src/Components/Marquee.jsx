import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004D43] h-[35rem]'>
      <div className='flex gap-10 overflow-hidden whitespace-nowrap h-full items-center'>
        {["We are ochi", "We are ochi", "We are ochi"].map((text, index) => (
          <motion.div 
            key={index}
            initial={{x:0}} 
            animate={{x:"-100%"}} 
            transition={{ease:"linear", repeat:Infinity, duration:5}} 
            className='flex items-center border-t-2 border-b-2 border-zinc-300'
          >
            <h1 className='text-[17vw] leading-none font-["Founders_Grotest_X-Condensed"] uppercase px-5 py-2 font-semibold'>
              {text}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Marquee;
