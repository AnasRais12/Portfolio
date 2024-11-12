"use client";
import React , { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}
        className={`about-box relative  w-full py-16  border-b-4 bg-[#1b1a1a] dark:bg-gray-100  font-bold flex flex-col gap-10`}
      >
        <h1
          className={`dark:text-[#1a1818]  text-center text-white  font-semibold font-Noto md:text-[50px] sm:text-[50px] text-[40px]  lg:text-[50px] `}
        >
          About Me
        </h1>
        <div className="w-full px-[3%] xl:px-[7%] lg:px-[4%] justify-center items-center  flex flex-col gap-5">
          <div className='lg:w-[100%] w-[100%]  flex justify-center items-center'>
          <h2
            className={`xl:text-[25px] lg:text-[21px] sm:text-[20px] text-[18px] text-center leading-10 font-Noto font-normal text-[#E0E0E0] dark:text-[#1E1E1E]   mb-[30px]`}
          >
          As a Frontend Developer, I build responsive and user-friendly web applications using React.js and Next.js. I use Tailwind CSS to create clean, modern designs, enhanced by animations that improve user interaction. On the backend, I work with Node.js and Adonis.js to manage data, perform CRUD operations, and integrate APIs, ensuring everything runs smoothly. I'm also proficient with GitHub for version control and collaboration. My goal is to create web solutions that are visually appealing, functionally strong, and interactive, providing users with a great experience.

          </h2>
          </div>
          <div className="boxes grid lg:grid-cols-2 grid-cols-1 gap-16 mt-10">
            <div
              id="experi"
              className="animation-left p-10 dark:shadow-lg shadow-custom  bg-[#201d1d] dark:bg-gray-100 dark:border-t-4    hover:duration-500 cursor-pointer  relative"
            >
              <h1
                className={`md:text-[36px] sm:text-[30px] text-[30px] lg:text-start text-center font-serif text-[aqua] dark:text-blue-500   font-semibold capitalize `}
              >
                Experience
              </h1>
              <h2
                className={` md:text-[20px] sm:text-[18px] text-[18px] lg:text-start text-center font-Noto font-semibold text-[#E0E0E0] dark:text-Shade  lg:mb-[10px] mb-[30px]`}
              >
                N e x o m o s <span className="ml-[10px]"></span>( June 2024 -
                Present )
              </h2>
              <p
                className={`md:text-[20px]  sm:text-[16px] lg:text-start text-center   [#1E1E1E] font-Noto font-normal text-[#E0E0E0] dark:text-Shade`}
              >
                At Nexomos <br /> I work on both frontend and backend tasks,
                focusing on creating intuitive UI designs, implementing complex
                features, ensuring responsive layouts, and integrating APIs for
                seamless communication. I also manage CRUD operations and data
                processing on the backend.
              </p>
            </div>
            <div className="animation-right p-10 dark:shadow-lg shadow-lg bg-[#1d1c1c] dark:bg-gray-100 dark:border-t-4   hover:duration-500 cursor-pointer">
              <h1
                className={`  lg:text-start text-center  text-[aqua] dark:text-blue-500  md:text-[36px] sm:text-[30px] text-[30px] font-serif  font-semibold capitalize`}
              >
                Education
              </h1>
              <h2
                className={`  lg:text-start text-center md:text-[20px] sm:text-[18px] text-[18px] font-Noto text-[#E0E0E0] dark:text-Shade   font-semibold  mb-[30px]`}
              >
                INTERMEDIATE ( 2021 - 2024)
                <br />
                <span></span> Hasni College Of Technology
              </h2>
              <h1
                className={`lg:text-start text-center md:text-[36px] sm:text-[30px] text-[30px] font-serif text-[aqua] dark:text-blue-500   font-semibold capitalize`}
              >
                Others
              </h1>
              <h2
                className={`lg:text-start text-center md:text-[20px] sm:text-[18px] text-[18px] font-Noto font-semibold text-[#E0E0E0] dark:text-Shade    mb-[30px]`}
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
});

export default About;
