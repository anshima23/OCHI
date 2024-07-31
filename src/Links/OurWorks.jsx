import React from 'react';
import { motion } from "framer-motion";
import Ready from "../Components/Ready"; // Adjust the path based on your folder structure
import Footer from "../Components/Footer"; // Adjust the path based on your folder structure

const Box = ({ color, text }) => (
  <div className={`w-1/2 h-[80vh] ${color} text-white p-12 flex items-center justify-center rounded-lg`}>
    <div className="text-center text-xl">{text}</div>
  </div>
);

function OurWorks() {
  return (
    <> 
      <div className="w-full h-screen flex flex-col items-start bg-[#CDEA68] px-10 pt-10 text-black">
        <h1 className="text-8xl text-black mb-4 mt-[150px]">WORK</h1>
      </div>

      <div className="w-full flex flex-col items-center bg-gray-900 py-16">
        {/* Heading Section */}
        <div className="w-full max-w-screen-xl flex items-center justify-center mb-10">
          <h1 className="text-5xl text-white text-center">
            We create{" "}
            <span className="border-b border-white">eye-catching</span> and{" "}
            <span className="border-b border-white">eye-opening</span> softwares
            that educate, inspire, and influence <br />
            action.
          </h1>
        </div>

        {/* Box Rows */}
        <div className="w-full max-w-screen-xl flex flex-col gap-10">
          <div className="w-full flex gap-10">
            <Box color="bg-gray-200" text="box1" />
            <Box color="bg-gray-100" text="box2" />
          </div>
          <div className="w-full flex gap-10">
            <Box color="bg-gray-200" text="box3" />
            <Box color="bg-gray-100" text="box4" />
          </div>
        </div>
      </div>

      <Ready />
      <Footer />
    </>
  );
}

export default OurWorks;
