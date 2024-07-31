import React from "react";
import { motion } from "framer-motion";
import Ready from "../Components/Ready"; // Adjust the path based on your folder structure
import Footer from "../Components/Footer"; // Adjust the path based on your folder structure

const boxData = [
  { number: 1, text: "React.js" },
  { number: 2, text: "Mongodb" },
  { number: 3, text: "Express.js" },
  { number: 4, text: "Node.js" },
  { number: 5, text: "React Native" },
  { number: 6, text: "Tailwind.css" },
];

function Services() {
  return (
    <>
      <div className="w-full h-screen bg-gray-900 flex flex-col items-start px-10 pt-10">
        <h1 className="text-8xl text-white mb-4 mt-[150px]">SERVICES</h1>
        <div className="w-full mt-20 border-b border-gray-300"></div>
        <div>
          <h1 className="text-5xl text-white mb-4 mt-[20px]">
            We create{" "}
            <span className="border-b border-white">eye-catching</span> and{" "}
            <span className="border-b border-white">eye-opening</span> softwares
            that educate, inspire and influence <br />
            action.
          </h1>
        </div>
        <div className="w-full mt-10 border-b border-gray-300"></div>
      </div>

      <div className="w-full p-40 bg-[#CDEA68] text-black">
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight mt-5">
          Let’s be honest. There are really no excuses to have a bad
          presentation anymore. No one has time for poorly communicated ideas.
          Focus on what you do best — growing your business, while we do our
          best at making your presentations awesome.
        </h1>
        <div className="w-full mt-10 border-b border-gray-900"></div>
      </div>

      <div className="w-full bg-[#004D43] h-[35rem]" p-10>
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
        <div className="w-full flex gap-5 border-[#a1b562]">
          <div className="w-1/2 flex items-start">
            <span className="text-2xl border-b border-black">What you can expect:</span>
          </div>
          <div className="w-1/2">
            <div className="grid grid-cols-2 gap-5">
              {boxData.map(({ number, text }) => (
                <div
                  key={number} // Provide a unique key for each element
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


      {/* Add Ready and Footer components here */}
      <Ready />
      <Footer />
    </>
  );
}

export default Services;
