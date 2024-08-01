import React from 'react';
import { motion } from "framer-motion";

const inputFields = [
  { placeholder: "Your Name", label: "Hi! My name is" },
  { placeholder: "Your Company", label: "and I work with" },
  { placeholder: "Project Details", label: "I'm looking for a partner to help me with" },
  { placeholder: "Completion Date", label: "With an idea of having that completed" },
  { placeholder: "Budget Range", label: "I am hoping to stay around a budget range of" },
  { placeholder: "Contact Information", label: "You can reach me at" },
  { placeholder: "Additional Information", label: "Optionally, I'm sharing more:" }
];


function Contact() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-10 mb-30 h-[150vh]">
        <div className="textstructure mt-20 px-20">
          {[ "LET'S START", "A PROJECT TOGETHER"].map((item, index) => (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 0 && (
                  <motion.div 
                    initial={{width: 0}} 
                    animate={{width: "9vw"}} 
                    transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} 
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

        <div className='text-white pt-10 m-10'>
      <h1 className='text-white mb-10 text-2ml'>Fill the form below:</h1>
      <p className='text-5xl'>
        {inputFields.map((field, index) => (
          <React.Fragment key={index}>
            {index > 0 && <span> </span>} {/* Add space between fields */}
            <span>{field.label} </span>
            <input
              type="text"
              placeholder={field.placeholder}
              className="bg-zinc-900 text-white border-b border-white placeholder:text-xs placeholder:text-center focus:outline-none mx-2"
            />
          </React.Fragment>
        ))}
      </p>

        {/* Container for checkbox and button */}
        <div className="flex justify-end mt-10">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
          />
          <span className="text-lg">I agree with privacy policy</span>
        </label>
        <button className="ml-4 px-4 py-2 bg-zinc-700 text-black rounded-full">Send Enquiry</button>
      </div>
    </div>
    </div>
    
    </>
  )
}
export default Contact;
