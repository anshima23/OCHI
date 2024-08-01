import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const inputFields = [
  { placeholder: "Your Name", label: "Hi! My name is" },
  { placeholder: "Your Company", label: "and I work with" },
  {
    placeholder: "Project Details",
    label: "I'm looking for a partner to help me with",
  },
  {
    placeholder: "Completion Date",
    label: "With an idea of having that completed",
  },
  {
    placeholder: "Budget Range",
    label: "I am hoping to stay around a budget range of",
  },
  { placeholder: "Contact Information", label: "You can reach me at" },
  {
    placeholder: "Additional Information",
    label: "Optionally, I'm sharing more:",
  },
];

function Contact() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 90); // Adjust rotation
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.3"
        className="w-full h-screen bg-zinc-900 pt-10 mb-30 h-[180vh]"
      >
        <div className="textstructure mt-20 px-20">
          {["LET'S START", "A PROJECT TOGETHER"].map((item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[6vw] mt-2 bg-red-500 rounded-md"
                  />
                )}
                <h1 className="flex items-center uppercase text-[7vw] h-full leading-[7vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="text-white pt-10 m-10">
          <h1 className="text-white mb-10 text-2xl">Fill the form below:</h1>
          <div className="text-5xl">
            {inputFields.map((field, index) => (
              <React.Fragment key={index}>
                <span>{field.label} </span>
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="bg-zinc-900 text-white border-b border-white placeholder:text-xs placeholder:text-center focus:outline-none mx-2"
                />
                {index < inputFields.length - 1 && <span> </span>}{" "}
                {/* Add space between fields */}
              </React.Fragment>
            ))}
          </div>

          {/* Container for checkbox and button */}
          <div className="flex justify-end mt-10 items-center">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-lg">I agree with privacy policy</span>
            </label>
            <button className="ml-4 px-4 py-2 bg-zinc-700 text-black rounded-full">
              Send Enquiry
            </button>
          </div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-section
        data-scroll-speed=".02"
        className="w-full min-h-screen py-40 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black flex flex-col items-center justify-center "
      >
        {/* Text and Buttons */}
        <div className="flex flex-col items-center relative z-10 mt-30">
          <h1 className="font-['Neue_Montreal'] text-[10vw] leading-[10vw] tracking-tight text-center">
            <span className="block -ml-8 relative">INSTAGRAM</span>
            <span className="block -ml-12 mt-2 relative">BEHANCE FACEBOOK</span>
            <span className="block -ml-16 mt-2 relative">LINKEDIN</span>
          </h1>

          {/* Eyes positioned above the text */}
          <div className="absolute flex gap-10 top-[10%]">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100"
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
                    <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.2"
        className="relative flex flex-col w-full h-screen bg-zinc-900 p-20 border-2 h-[500vh]"
      >
        <h1 className="text-7xl mb-10">
          A few things you
          <br /> may want to ask us:
        </h1>
        <div className="w-full mt-1 border-b border-gray-300"></div>
        <div className='w-full h-full flex flex-row justify-between font-["Founders_Grotesk_X-Condensed"]  mb-6 '>
          <div className="w-1/2 h-full flex  p-5 ">
            <h1>How many iterations the project includes?</h1>
          </div>

          <div>
            <div className="p-5  ">
              <h1 className="mb-10 ">Description:</h1>
              <div>
                <p className="mb-10 ">
                  We’re committed to delighting every one of our clients and
                  will do
                  <br /> everything to deliver on the project fully. We iterate
                  as much as
                  <br /> needed to ensure the best result.
                </p>
              </div>

              <div>
                <div className="mb-10">
                  <div className="flex items-start">
                    <span className="mr-10 text-xl font-bold">1.</span>
                    <p className="leading-6">
                      Based on our experience and ways of working, no
                      <br />
                      more than three revisions are needed to meet
                      <br />
                      clients’ expectations and business needs.
                    </p>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="flex items-start">
                    <span className="mr-10 text-xl font-bold">2.</span>
                    <p className="leading-6">
                      If your project is something we are not capable of
                      <br />
                      doing, we will say it right there and won’t commit.
                      <br />
                      Instead, we will refer you to specialists in any field
                      <br />
                      you need and we might know.
                    </p>
                  </div>
                </div>

              </div>
              <div className="w-full mt-1 border-b border-zinc-900"></div>
            </div>
            

          </div>
        </div>

        <div className='w-full h-full flex flex-row justify-between font-["Founders_Grotesk_X-Condensed"]  gap-10'>
          <div className='w-1/2 h-full flex flex-row justify-between font-["Founders_Grotesk_X-Condensed"] '>
            <div className="heading">
              <h1 className="text-[6vw] font-semibold uppercase leading-none mb-5">
                EYE-
              </h1>
              <h1 className="text-[6vw] font-semibold uppercase leading-none">
                OPENING
              </h1>
            </div>
            {/* SVG positioned absolutely at the bottom left corner */}
            <svg
              className="absolute bottom-0 left-0 mb-5 ml-5"
              width="72"
              height="30"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* SVG paths */}
            </svg>
          </div>
          <div className="w-1/2 ">
            <h1 className="text-[4vw] font-semibold uppercase leading-none mb-10">
              PRESENTATIONS
            </h1>
            <div className="dets font-['Neue_Montreal']">
              <a href="#" className="block text-xl font-light mb-2">
                Facebook
              </a>
              <a href="#" className="block text-xl font-light mb-2">
                Instagram
              </a>
              <a href="#" className="block text-xl font-light mb-2">
                Twitter
              </a>
              <a href="#" className="block text-xl font-light">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default Contact;
