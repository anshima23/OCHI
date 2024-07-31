
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Ready from "../Components/Ready"; // Adjust the path based on your folder structure
import Footer from "../Components/Footer"; // Adjust the path based on your folder structure

function AboutUs() {

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90); // Center of the circle at 0 degrees
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  return (
    <>
    <div data-scroll data-scroll-speed=".1"   className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Are", "Engineers"].map((item, index) => (
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
      <div className="border-t-[2px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20"></div>
    </div>


    <div  className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Workiz_1-1340x740.jpg")]'></div>

    <div data-scroll data-scroll-speed="-.3" className="w-full custom-height h-screen bg-zinc-900 pt-1 relative">
    <h1 className="absolute bottom-0 left-0 mb-8 ml-8 text-white text-7xl">
          We save businesses from ugly and<br/> ineffective designs.
        </h1>
        {/* Eyes positioned in the center */}
        <div className='absolute inset-0 flex items-center justify-center'>
        
          <div className='flex gap-10'>
            <div className='flex items-center justify-center w-[18vw] h-[18vw] rounded-full bg-zinc-100'>
              <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                  }}
                  className="line w-full h-10"
                >
                  <div className='w-12 h-12 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-[18vw] h-[18vw] rounded-full bg-zinc-100'>
              <div className='relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900'>
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                  }}
                  className="line w-full h-10"
                >
                  <div className='w-12 h-12 rounded-full bg-zinc-100'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

         
        {/* Heading positioned at the bottom-left corner */}
       
        <div className="border-t-[2px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20"></div>
      </div>
      <Ready />
      <Footer />
   </>
  )
}

export default AboutUs