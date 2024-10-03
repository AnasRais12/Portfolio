"use client";
import { useEffect,  } from "react";
import { techStack } from "@/constant";
import { gsap } from "gsap";


const Skills = () => {

  useEffect(() => {
    // Select the SVG path
    var pathi = "M 10 100 Q 500 100 990 100  ";
    const finali = "M 10 100 Q 500 100 990 100 ";

    var string = document.querySelector("#liness");
    string.addEventListener("mousemove", function (dets) {
      pathi = `M 10 100 Q ${dets.x} ${dets.y} 990 100 `;
      console.log(pathi);
      gsap.to("svg path", {
        attr: { d: pathi },
        duration: 0.7,
        ease: "power3.out",
      });
    });
    var string = document.querySelector("#liness");
    string.addEventListener("mouseleave", function () {
      gsap.to("svg path", {
        attr: { d: finali },
        duration: 1.3,

        ease: "elastic.inOut",
      });
      console.log("anas-------line");
    });
  }, []);

  return (
    <>
      <div
        id="liness"
        className={` bg-[#0f0d0d] dark:bg-white h-[200px] border-t-4 border-white  mt-[-50px] w-full`
        }>
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
      <div className={` relative w-full py-1 pb-[4%] bg-[#0f0d0d] dark:bg-white  border-b-4 font-bold flex flex-col gap-8`}>
        <h1 className={`text-center font-semibold font-Noto text-white dark:text-heading   text-[50px] mt-[-40px]`}>
          S k i l l s
        </h1>

        <div>
          <div className="gap-10 px-[8%]  py-[2%] grid grid-cols-3 justify-between font-sans text-[18px] items-center">
            {techStack.map((el, index) => (
              <div
                key={index}
                // Store reference to each box
                className=" box2 justify-center py-4 px-4 bg-gray-50 shadow-custom  shadow-gray-500 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer duration-500"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
