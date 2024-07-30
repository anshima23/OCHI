import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import { gsap } from "gsap";

function Navbar() {
  const linkRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const overlayRef = useRef(null);

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

  const handleClick = (index, path) => {
    setActiveIndex(index);

    // Start overlay animation
    gsap.to(overlayRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        // Navigate to the new path after the overlay animation is complete
        navigate(path);

        // Start the second part of the overlay animation
        gsap.to(overlayRef.current, {
          y: "100%",
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
    });
  };

  return (
    <div>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black"
        style={{ transform: "translateY(100%)" }}
      ></div>

      {/* Navbar */}
      <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
        <div className="logo">
          <h1 className="text-3xl font-bold border-b-4 border-white pb-2">Developers</h1>
        </div>

        <div className="links flex gap-10">
          {[
            { name: "Services", path: "/services" },
            { name: "Our Works", path: "/our-works" },
            { name: "About Us", path: "/about-us" },
            { name: "Insights", path: "/insights" },
            { name: "Contact", path: "/contact" }
          ].map((item, index) => (
            <Link
              key={index}
              ref={(el) => (linkRefs.current[index] = el)}
              to={item.path} // Define paths for each item
              className="relative text-lg capitalize font-light text-white overflow-hidden cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleClick(index, item.path)}
            >
              {item.name}
              <span
                className={`underline absolute bottom-0 left-0 h-0.5 bg-white origin-left ${
                  index === activeIndex ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
