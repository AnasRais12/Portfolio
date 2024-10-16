"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  useEffect(() => {
    const finals = "M 10 100 Q 500 100 990 100"; // Final path after mouse leaves

    const string = document.querySelector("#lines svg"); // Select the SVG element
    const path = string.querySelector("path"); // Select the path inside the SVG

    // Mousemove event to animate the line based on mouse position
    string.addEventListener("mousemove", function (event) {
      const rect = string.getBoundingClientRect(); // Get the SVG's position relative to the viewport
      const x = event.clientX - rect.left; // Mouse X relative to SVG
      const y = event.clientY - rect.top;  // Mouse Y relative to SVG

      // Calculate the dynamic path (adjusting Y slightly to avoid going too far up)
      const paths =  `M 10 100 Q ${x} ${Math.max(y, 600)} 990 100`;

      gsap.to(path, {
        attr: { d: paths },
        duration: 0.7,
        ease: "power3.out",
      });
    });

    // Mouseleave event to reset the line to its original position
    string.addEventListener("mouseleave", function () {
      gsap.to(path, {
        attr: { d: finals },
        duration: 1.3,
        ease: "elastic.inOut",
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      string.removeEventListener("mousemove", this);
      string.removeEventListener("mouseleave", this);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="contact-box w-full pt-16 bg-[#0f0d0d] dark:bg-white flex flex-col gap-4">
        <h1 className="text-center font-semibold font-Noto text-white dark:text-Shade md:text-[50px] sm:text-[50px] text-[40px] lg:text-[50px]">
          Get In Touch
        </h1>
        <div className='w-full justify-center items-center px-3 sm:px-10'>
          <h2 className="text-center text-white dark:text-Shade mb-[20px] md:mb-[40px] sm:[mb-20px] font-Noto font-normal text-[17px] sm:text-[20px] md:text-[22px]">
            "Looking for a passionate front-end developer? I'm here to transform your vision into a seamless user experience."
          </h2>
        </div>
        <div className="flex gap-5 justify-center items-center font-Noto text-white">
          <div className="contact-icon flex gap-4 md:gap-4 lg:gap-6 justify-center items-center">
            <a href="https://web.skype.com/" target="blank">
              <img className="sm:w-12 md:w-14 w-10 hover:scale-125 duration-500" src="/images/Skype.svg" />
            </a>
            <a href="https://www.linkedin.com/in/anas-baig-3ab1392b1/" target="blank">
              <img className="md:w-14 sm:w-12 w-10 hover:scale-150 duration-500" src="/images/Linkdin.svg" />
            </a>
            <a href="https://www.instagram.com/anasbaig604/">
              <img className="md:w-14 sm:w-12 w-10 hover:scale-150 duration-500" src="/images/Instagaram.svg" />
            </a>
            <a href="https://www.facebook.com/anas.rais.311" target="blank">
              <img className="md:w-14 sm:w-12 w-10 hover:scale-150 duration-500" src="/images/facebooks-2.svg" />
            </a>
            <a href="https://github.com/AnasRais12" target="blank">
              <img className="md:w-14 sm:w-12 w-10 bg-white rounded-full border-black border-2 hover:scale-150 duration-500" src="/images/github.svg" />
            </a>
            <a href="mailto:anasraees33@gmail.com">
              <img className="md:w-14 sm:w-12 w-10 bg-white rounded-full border-2 hover:scale-150 duration-500" src="/images/gmail.svg" />
            </a>
          </div>
        </div>
        <div id="lines" className="h-[70px] dark:bg-white w-full">
          <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 100 Q 500 100 990 100" stroke="white" strokeWidth="20" fill="transparent" />
          </svg>
        </div>
      </div>
    </>
  );
});

export default Contact;