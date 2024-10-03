"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Select the SVG path
    var pathh = "M 10 100 Q 500 100 990 100  ";
    const finall = "M 10 100 Q 500 100 990 100 ";

    var string = document.querySelector("#line1");
    string.addEventListener("mousemove", function (dets) {
      pathh = `M 10 100 Q ${dets.x} ${dets.y} 990 100 `;
      console.log(pathh);
      gsap.to("svg path", {
        attr: { d: pathh },
        duration: 0.7,
        ease: "power3.out",
      });
    });
    var string = document.querySelector("#line1");
    string.addEventListener("mouseleave", function () {
      gsap.to("svg path", {
        attr: { d: finall },
        duration: 1.3,

        ease: "elastic.inOut",
      });
      console.log("anas-------line");
    });
  }, []);

  return (
    <>
      <div
        id="line1"
        className={` h-[200px] bg-[#121212] dark:bg-gray-100  border-t-4 border-white  mt-[-147px] w-full `}
      >
        <svg
          viewBox="0 0 1000 500" // Update the viewBox to allow scaling
          preserveAspectRatio="none" // Prevent distortion
          style={{ width: "100%", height: "100%" }} // Ensure full width & height
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 10 100 Q 500 100 990 100 "
            stroke={`white`}
            strokeWidth="10"
            fill="transparent"
          />
        </svg>
      </div>
      <div
        className={` relative w-full py-1 pb-[6%] border-b-4 bg-[#121212] dark:bg-gray-100  font-bold flex flex-col gap-10`}
      >
        <h1
          className={`text-white  dark:text-[#1a1818]  text-center  font-semibold font-Noto  text-[50px] mt-[-40px]`}
        >
          About Me
        </h1>
        <div className="w-full px-[7%] flex flex-col gap-5">
          <h1
            className={`text-[36px] font-serif text-[aqua] dark:text-blue-500  font-semibold`}
          >
            Introduction
          </h1>
          <h2
            className={`text-[25px] font-Noto font-normal text-[#E0E0E0] dark:text-[#1E1E1E]   mb-[30px]`}
          >
            As a Frontend Developer, I build responsive and user-friendly web
            applications using React.js and Next.js. I use Tailwind CSS to
            create clean, modern designs, enhanced by animations that improve
            user interaction. On the backend, I work with Node.js and Adonis.js
            to manage data, perform CRUD operations, and integrate APIs,
            ensuring everything runs smoothly. I'm also proficient with GitHub
            for version control and collaboration. My goal is to create web
            solutions that are visually appealing, functionally strong, and
            interactive, providing users with a great experience.
          </h2>
          <div className="boxes grid grid-cols-2 gap-16 mt-10">
            <div
              id="experi"
              className="animation-left p-10 shadow-custom shadow-gray-900  hover:p-12 hover:duration-500 cursor-pointer  relative"
            >
              <h1
                className={`text-[36px] font-serif text-[aqua] dark:text-blue-500   font-semibold capitalize `}
              >
                Experience
              </h1>
              <h2
                className={`text-[20px] font-Noto font-semibold text-[#E0E0E0] dark:text-Shade  mb-[10px]`}
              >
                N e x o m o s <span className="ml-[10px]"></span>( June 2024 -
                Present )
              </h2>
              <p
                className={`text-[20px] [#1E1E1E] font-Noto font-normal text-[#E0E0E0] dark:text-Shade`}
              >
                At Nexomos <br /> I work on both frontend and backend tasks,
                focusing on creating intuitive UI designs, implementing complex
                features, ensuring responsive layouts, and integrating APIs for
                seamless communication. I also manage CRUD operations and data
                processing on the backend.
              </p>
            </div>
            <div className="animation-right  p-10 shadow-custom shadow-gray-900  hover:p-12 hover:duration-500 cursor-pointer">
              <h1
                className={`text-[aqua] dark:text-blue-500  text-[36px] font-serif  font-semibold capitalize`}
              >
                Education
              </h1>
              <h2
                className={`text-[20px] font-Noto text-[#E0E0E0] dark:text-Shade   font-semibold  mb-[30px]`}
              >
                INTERMEDIATE ( 2021 - 2024)
                <br />
                <span></span> Hasni College Of Technology
              </h2>
              <h1
                className={`text-[36px] font-serif text-[aqua] dark:text-blue-500   font-semibold capitalize`}
              >
                Others
              </h1>
              <h2
                className={`text-[20px] font-Noto font-semibold text-[#E0E0E0] dark:text-Shade    mb-[30px]`}
              >
                MERN Stack Development <br /> ( May 2024 - Present )
                <br />
                Saylani Mass IT Training ( S M I T )
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
