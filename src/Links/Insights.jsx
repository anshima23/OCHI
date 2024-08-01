import React from 'react';
import { motion } from "framer-motion";
import Footer from "../Components/Footer"; 

const boxData = [
  { number: 1, text: " Node.js" },
  { number: 2, text: "React Native" },
  { number: 3, text: "MongoDB" },
];

function Insights() {
  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex flex-col items-start px-10 pt-10 h-[1100px]">
        <h1 className="text-8xl text-white mb-4 mt-[150px]">INSIGHTS</h1>

        {/* Full-width border */}
        <div className="border-t-2 border-zinc-800 mt-32 w-full"></div>

        {/* Row for heading and buttons */}
        <div className="w-full flex justify-between items-center mt-8">
          {/* Heading */}
          <h2 className="text-xl text-white">Latest Insight</h2>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">Node.js</button>
            <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">React Native</button>
            <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">MongoDB</button>
          </div>
        </div>

        {/* Expanded black area for the boxes */}
        <div className="w-full flex mt-10 gap-5">
          {/* Box 1 */}
          <div className="w-1/4 h-[400px] bg-gray-700 text-white p-4 rounded-lg"></div>

          {/* Group of two boxes */}
          <div className="w-1/2 h-[400px]">
            <div className='h-full'>
              <div className="w-full h-[80%] bg-gray-400 text-white p-4 rounded-lg mb-4"></div>
              <div className="w-full h-[20%] text-white p-4">
                <div className="text-center">Developing Company-wide designs for premium Blend.</div>
              </div>
            </div>
          </div>
        </div>

        {/* New row with heading at the leftmost corner */}
        <div className="w-full flex mt-10">
          <h3 className="text-lg text-white ml-10">
            Presenting to an International Audience:<br /> Tips and lessons Learned.
          </h3>
        </div>
      </div>


      <div className="w-full bg-[#004D43] h-[35rem]" p-8>
        <div className="flex gap-10 overflow-hidden whitespace-nowrap h-full items-center">
          {["We are Developers", "We are Developers", "We are Developers"].map((text, index) => (
            <motion.div
              key={index}
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
              className="flex items-center border-t-2 border-b-2 border-zinc-300"
            >
              <h1 className="text-[17vw] leading-none font-['Founders_Grotest_X-Condensed'] uppercase pt-5 font-semibold">
                {text}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>

      <div data-scroll data-scroll-section data-scroll-speed="-0.1" className="w-full bg-[#004D43] text-black p-40">
  <div className="w-full flex gap-5 border-[#a1b562] border-b-2">
    <div className="w-1/2 flex items-start">
      <span className="text-2xl border-b-2 border-black">What you can expect:</span>
    </div>
    <div className="w-[85%]">
      <div className="grid grid-cols-3 gap-5">
        {boxData.map(({ number, text }) => (
          <div
            key={number}
            className="text-5xl h-[35vh] rounded-3xl bg-[#1a6157] flex flex-col justify-between p-5"
          >
            <div className="flex items-start justify-start">
              <span className="text-white text-5xl">{number < 10 ? `0${number}` : number}</span>
            </div>
            <div className="flex items-end justify-start w-full">
              <span className="text-white text-sm border-b border-white">{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

      
      <Footer />
    </>
  );
}

export default Insights;
