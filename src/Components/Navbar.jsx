import React, { useRef, useState } from "react";
import { gsap } from "gsap";

function Navbar() {
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);

    gsap.to(linkRefs.current[index].querySelector(".underline"), {
      scaleX: 1,
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(linkRefs.current[index], {
      y: -10,
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        gsap.fromTo(
          linkRefs.current[index],
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      },
    });
  };

  const handleMouseLeave = (index) => {
    if (index === activeIndex) {
      gsap.to(linkRefs.current[index].querySelector(".underline"), {
        scaleX: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(linkRefs.current[index], {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
      setActiveIndex(null);
    }
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">
      <h1 class="text-3xl font-bold border-b-4 border-white pb-2">Developers</h1>
      </div>

      <div className="links flex gap-10">
        {["Services", "Our Works", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              ref={(el) => (linkRefs.current[index] = el)}
              className="relative text-lg capitalize font-light text-white overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index)}
            >
              {item}
              <span
                className={`underline absolute bottom-0 left-0 h-0.5 bg-white origin-left ${
                  index === activeIndex ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></span>
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
