"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark', !darkMode);
  };
  return (
    <>
      {/* Navbar - Home  - Start*/}
      <div
        className={` flex px-[5%] justify-between py-3 bg-[#1E1E1E] dark:bg-gray-100   overflow-x-hidden   font-serif text-[#E0E0E0] w-full  fixed top-0 z-50 gap-8 items-center`}
      >
        <div className=" w-[10%]  flex justify-start  items-center rounded-full">
          <h1
            className={`font-Lobester lg:text-[50px] md:text-[50px]   text-gray-200 dark:text-blue-500 "  `}
          >
            A-B
          </h1>
        </div>
        <div className=" w-[85%] justify-end hidden lg:flex  items-center">
          <ul
            className={`flex items-center gap-8 lg:text-[20px]  lg:bg-red-900 md:bg-blue-600 md:text-[18px] xl:text-[22px] font-semibold font-Noto text-gray-200 dark:text-[#1E1E1E]   font-semi-bold`}
          >
            <li>
            <a className={`a1 hover:bg-[aqua] dark:hover:bg-blue-500 `} href="home">
               Home
              </a>
            </li>
            <li>
            <a className={`a1 hover:bg-[aqua] dark:hover:bg-blue-500 `} href="about">
                About
              </a>
            </li>
            <li>
            <a className={`a1 hover:bg-[aqua] dark:hover:bg-blue-500 `} href="project">
                Project
              </a>
            </li>
            <li>
            <a className={`a1 hover:bg-[aqua] dark:hover:bg-blue-500 `} href="contact">
                Contact

              </a>
            </li>
            <li>
              <a className={`a1 hover:bg-[aqua] dark:hover:bg-blue-500 `} href="skills">
                Skills
              </a>
            </li>
          </ul>

          {/* ICONS LIGHT And Dark Theme */}
        </div>
        <div
          onClick={toggleDarkMode}
          className="w-[5%] rounded-full flex justify-end   items-center  "
        >
          <img
            className="w-full size-12 "
            src={darkMode ? "/images/Weather.svg" : "images/Sun.svg"}
          />
        </div>
      </div>
      {/* Home Page-Start */}


      {/* <div className="box  w-full h-screen font-second font-bold text-30px"> */}
        {/* Home Page - Start */}
          {/* Home Section-Start */}

        {/* <div className="content2 w-full bg-[#1E1E1E] border-b-4  z-0">
          <div
            className={`w-full border-b-4 border-white  flex gap-4 pt-[100px] pb-[100px] px-[5%] bg-dark_cloud dark:bg-light_cloud bg-no-repeat items-center  bg-[#121212] `}
          >
            <div className="w-[60%] text-[#E0E00]  flex px-10 text-[60px]   flex-col gap-2">
              <div>
                <h1 className={`text-[73px] text-[#E0E0E0] dark:text-[#242424] tracking-tighter font-extrabold font-sans`}>
                  Hi, I'm <span className="ml-[10px]"> Anas</span>
                  <span className="ml-[10px]"> Baig</span>
               </h1>
              </div>
              <div>
                <h1 className={`line-1 anim-typewriter  font-sans  font-extrabold   text-[73px] text-[aqua] dark:text-blue-500  `}>
                  Frontend Developer
                </h1>
              </div>
              <div>
                <h2 className={`text-[25px] font-sans font-normal text-[#ffffff] dark:text-black   `}>
                  My goal is to transform ideas into fully functional and
                  visually appealing web applications.
                </h2>
                <a href="/documents/Anas.pdf" download={"Anas.pdf"}>
                  <button className={` bg-[aqua] dark:bg-blue-500  font-sans  text-white rounded-[10px] text-[28px] px-32 font-bold py-2  hover:scale-125 duration-300 hover:px-30`}>
                    Resume
                  </button>
                </a>
              </div>
            </div>
            <div className="w-[50%]   ">
              <img className="w-full" src="/images/webdev.svg" />
            </div>
          </div> */}

          {/* Home-Section-End */}
        {/* </div> */}
      {/* </div> */}

      
      {/* Home Page End */}
    </>
  );
};
export default Home;
