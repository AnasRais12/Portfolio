"use client";
import React from "react";
import { useEffect } from "react";
import { gsap } from "gsap";
const Contact = () => {

  useEffect(() => {
    // Select the SVG path
    var paths = "M 10 100 Q 500 100 990 100  ";
    const finals = "M 10 100 Q 500 100 990 100 ";

    var string = document.querySelector("#lines");
    string.addEventListener("mousemove", function (dets) {
      paths = `M 10 100 Q ${dets.x} ${dets.y} 990 100 `;
      console.log(paths);
      gsap.to("svg path", {
        attr: { d: paths },
        duration: 0.7,
        ease: "power3.out",
      });
    });
    var string = document.querySelector("#lines");
    string.addEventListener("mouseleave", function () {
      gsap.to("svg path", {
        attr: { d: finals },
        duration: 1.3,

        ease: "elastic.inOut",
      });
      console.log("anas-------line");
    });
 
  }, []);

  return (
    <>
      <div
        id="lines"
        className={`h-[200px] bg-[#0f0d0d] dark:bg-white border-t-4 border-white  mt-[-50px] w-full `}
      >
        <svg
          viewBox="0 0 1000 500" // Update the viewBox to allow scaling
          preserveAspectRatio="none" // Prevent distortion
          style={{ width: "100%", height: "100%" }} // Ensure full width & height
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 100 Q 500 100 990 100 "
            stroke={`black`}
            strokeWidth="10"
            fill="transparent"
          />
        </svg>
      </div>
      <div className={`$w-full py-1 bg-[#0f0d0d] dark:bg-white flex flex-col gap-4`}>
        <h1 className={`text-center font-semibold font-Noto text-white dark:text-Shade   text-[50px] mt-[-50px]`}>
          Get In Touch
        </h1>
        <h1 className={`text-center text-white dark:text-Shade  mb-[40px] font-Noto font-normal text-[22px] `}>
          "Looking for a passionate front-end developer? I'm here to transform
          your vision into a seamless user experience."
        </h1>
        <div className="flex flex-col gap-5 justify-center items-center font-Noto text-white">
          <div className="text-center flex flex-col justify-center items-cente pb-[6%] gap-10 ">
            <div className="flex gap-6 justify-center items-center">
              <a href="https://web.skype.com/ " target="blank">
                <img className="w-14 hover:scale-125 duration-500 " src="/images/skype.svg" />
              </a>
              <a
                href="https://www.linkedin.com/in/anas-baig-3ab1392b1/"
                target="blank"
              >
                <img className="w-14  hover:scale-150 duration-500" src="/images/linkdin.svg" />
              </a>
              <a href="https://www.instagram.com/anasbaig604/">
                <img className="w-14 hover:scale-150 duration-500 " src="/images/instagaram.svg" />
              </a>
              <a href="https://www.facebook.com/anas.rais.311" target="blank">
                <img className="w-14 hover:scale-150 duration-500 " src="/images/facebooks-2.svg" />
              </a>
              <a href="https://github.com/AnasRais12" target="blank">
                <img
                  className="w-14 bg-white rounded-full border-black border-2 hover:scale-150 duration-500 "
                  src="/images/github.svg"
                />
              </a>
              <a href="mailto:anasraees33@gmail.com">
                <img
                  className="w-14 bg-white rounded-full border-2 hover:scale-150 duration-500 "
                  src="/images/gmail.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
