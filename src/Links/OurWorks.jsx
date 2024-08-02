import React, { useEffect, useState } from "react";
import Ready from "../Components/Ready"; // Adjust the path based on your folder structure
import Footer from "../Components/Footer"; // Adjust the path based on your folder structure

const Box = ({ color, text, imageUrl }) => (
  <div
    className={`w-1/2 h-[80vh] ${color} text-white p-12 flex items-center justify-center rounded-lg`}
  >
    <div className="flex flex-col items-center justify-center w-full h-full">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={text}
          className="w-full h-2/3 object-cover rounded-lg mb-4"  // Adjust as needed
        />
      )}
      <div className="text-center text-xl">{text}</div>
    </div>
  </div>
);

function OurWorks() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const Eye = () => (
    <div
      className="flex items-center justify-center w-[22vw] h-[22vw] rounded-full bg-zinc-100"
      style={{ zIndex: 0 }}  
    >
      <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          className="line w-full h-10"
        >
          <div className="w-12 h-12 rounded-full bg-zinc-100"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div  className="w-full h-screen flex flex-col items-start bg-[#CDEA68] px-10 pt-10 text-black relative">
        <h1 className="text-8xl text-black mb-4 mt-[150px]">WORK</h1>

        {/* Eye and Box Section */}
        <div  className="relative flex flex-col items-center gap-2 mb-0 bottom-0 left-1/2 transform -translate-x-1/2">
          {/* Boxes overlapping the eyes */}
          <div 
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col gap-2"
            style={{ zIndex: 1 }}  
          >
            <div 
              className="w-[60vw] h-[17vh] ml-10 bg-[#9cb34b] text-white flex items-center justify-center rounded-lg"
              style={{ marginTop: "-5rem" }}
            ></div>
            <div
              className="w-[70vw] h-[10vh] bg-[#8da637] text-white flex items-center justify-center rounded-lg"
              style={{ marginTop: "-5rem" }}
            ></div>
          </div>

          {/* Eyes */}
          <div className="flex gap-10 mt-10" style={{ zIndex: 0 }}>
            <Eye />
            <Eye />
          </div>
        </div>
      </div>

      <div   data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full flex flex-col items-center bg-gray-900 py-16">
        {/* Heading Section */}
        <div className="w-full max-w-screen-xl flex items-center justify-center mb-10">
          <h1 className="text-5xl text-white text-center">
            We create{" "}
            <span className="border-b border-white">eye-catching</span> and{" "}
            <span className="border-b border-white">eye-opening</span> software
            that educate, inspire, and influence <br />
            action.
          </h1>
        </div>

         {/* Box Rows */}
         <div className="w-full max-w-screen-xl flex flex-col gap-10">
          <div className="w-full flex gap-10">
            <Box color="bg-gray-200" text="box1" imageUrl="path/to/your-image1.jpg" />
            <Box color="bg-gray-100" text="box2" imageUrl="path/to/your-image2.jpg" />
          </div>
          <div className="w-full flex gap-10">
            <Box color="bg-gray-200" text="box3" imageUrl="path/to/your-image3.jpg" />
            <Box color="bg-gray-100" text="box4" imageUrl="path/to/your-image4.jpg" />
          </div>
        </div>
      </div>

      <Ready />
      <Footer />
    </>
  );
}

export default OurWorks;
