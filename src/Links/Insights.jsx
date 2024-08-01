import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const boxData = [
  { number: 1, text: "Node.js" },
  { number: 2, text: "React Native" },
  { number: 3, text: "MongoDB" },
];

function Insights() {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 flex flex-col items-start px-10 pt-10">
        {/* PART 1: Hero Section */}
        <div className="relative w-full h-[100vh] mt-20">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-10">
            <h1 className="text-8xl text-white mb-10">INSIGHTS</h1>
            <div className="border-t-2 border-zinc-800 mt-8 w-full"></div>

            {/* PART 2: Heading and Buttons */}
            <div className="w-[90vw] flex justify-between items-center mt-10 ">
              <div>
                <h2 className="text-xl text-white">Latest Insight</h2>
              </div>
              <div className="flex gap-4">
                <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">
                  Node.js
                </button>
                <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">
                  React Native
                </button>
                <button className="px-4 py-2 border border-white text-white bg-transparent rounded-full">
                  MongoDB
                </button>
              </div>
            </div>

            {/* PART 3: Grid Structure for Boxes */}
        <div className="w-full h-[55vh] mt-10 mb-20 border-black p-5 grid grid-cols-2 gap-5">
          <div className="w-[50vw] h-[55vh] flex flex-row  gap-5">
               {/* Column 1: Big Box and its text box */}
          <div className=" w-[25vw] flex flex-col gap-1">
            <div className="h-[40vh] bg-gray-700 text-white p-4 rounded-lg shadow-md">
              Big Box
            </div>
            <div className="bg-gray-600 text-white p-4 rounded-lg shadow-md">
              Text for Big Box
            </div>
          </div>

          {/* Column 2: Small Box and its text box */}
          <div className="  w-[25vw]  flex flex-col gap-1">
            <div className="h-[35vh] bg-gray-400 text-white p-4 rounded-lg shadow-md">
              Small Box
            </div>
            <div className="bg-gray-300 text-white p-4 rounded-lg shadow-md">
              Text for Small Box
            </div>
          </div>
          </div>
         
        </div>
            


          </div>
        </div>

        
        <div className="w-full bg-[#004D43] h-[35rem] p-8">
           {/* PART 4: Horizontal Scrolling Text */}
        <div className="w-full bg-[#004D43] h-[35rem] p-8">
          <div className="flex gap-10 overflow-hidden whitespace-nowrap h-full items-center">
            {[
              "We are Developers",
              "We are Developers",
              "We are Developers",
            ].map((text, index) => (
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

        {/* PART 5: What You Can Expect */}
        <div className="w-full bg-[#004D43] text-black p-40">
          <div className="w-full flex gap-5 border-[#a1b562] border-b-2 mb-8">
            <div className="w-1/2 flex items-start">
              <span className="text-2xl border-b-2 border-black">
                What you can expect:
              </span>
            </div>
            <div className="w-[85%]">
              <div className="grid grid-cols-3 gap-5">
                {boxData.map(({ number, text }) => (
                  <div
                    key={number}
                    className="text-5xl h-[35vh] rounded-3xl bg-[#1a6157] flex flex-col justify-between p-5"
                  >
                    <div className="flex items-start justify-start">
                      <span className="text-white text-5xl">
                        {number < 10 ? `0${number}` : number}
                      </span>
                    </div>
                    <div className="flex items-end justify-start w-full">
                      <span className="text-white text-sm border-b border-white">
                        {text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
        

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Insights;
