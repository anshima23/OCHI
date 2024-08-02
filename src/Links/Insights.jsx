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
      <div className="w-full min-h-screen bg-gray-900 flex flex-col items-center">
        {/* PART 1: Hero Section */}
        <div className="w-full h-[100vh] flex flex-col items-center justify-center px-10 mt-20">
          <div className="text-center">
            <h1 className="text-8xl text-white mb-10 ">INSIGHTS</h1>
            <div className="border-t-2 border-zinc-800 mt-8 w-full"></div>

            {/* PART 2: Heading and Buttons */}
            <div className="w-[150%] max-w-4xl  flex items-center mt-10">
              <div className="flex-grow">
                <h2 className="text-xl text-white flex flex-left">Latest Insight</h2>
              </div>
              <div className="flex gap-4">
                {["Node.js", "React Native", "MongoDB"].map((label, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 border border-white text-white bg-transparent rounded-full"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PART 3: Grid Structure for Boxes */}
        <div className="w-full h-[55vh] flex flex-col items-center mt-10 mb-20 px-5">
          <div className="w-full max-w-4xl grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <div className="h-[40vh] bg-gray-700 text-white p-4 rounded-lg shadow-md">
                Big Box
              </div>
              <div className="bg-gray-600 text-white p-4 rounded-lg shadow-md">
                Text for Big Box
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-[35vh] bg-gray-400 text-white p-4 rounded-lg shadow-md">
                Small Box
              </div>
              <div className="bg-gray-300 text-white p-4 rounded-lg shadow-md">
                Text for Small Box
              </div>
            </div>
          </div>
        </div>

        {/* PART 4: Horizontal Scrolling Text */}
        <div className="w-full bg-[#004D43] h-[35rem] overflow-hidden">
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
        <div className="w-full mb-20 bg-[#004D43] text-black p-0">
          <div className="w-full max-w-4xl flex flex-col items-center px-10">
            <div className="w-full flex gap-5 border-[#a1b562] border-b-2 mb-8">
              <span className="text-2xl border-b-2 border-black">
                What you can expect:
              </span>
            </div>
            <div className="w-full grid grid-cols-3 gap-5">
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
        {/* Footer */}
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Insights;
