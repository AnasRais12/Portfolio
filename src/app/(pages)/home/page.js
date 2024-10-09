"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuBar, setMenubar] = useState(false);

  const toggleButton = () => {
    setMenubar(!menuBar);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", !darkMode);
  };

  return (
    <>
      {/* Navbar - Home  - Start*/}
      <div
        className={`navbar flex px-8  bg-gray lg:px-16 overflow-x-hidden bg-[#1E1E1E] py-2 justify-between   dark:bg-gray-100 font-Noto text-[#E0E0E0] w-[100%] sm:w-full  fixed top-0 z-50 gap-8 items-center`}
      >
        {/* Logo */}
        <div className=" logo sm:w-[10%] w-[13%]  flex justify-start items-center overflow-x-hidden   ">
          <img
            className=" xl:w-[60%] lg:w-[70%] md:w-[80%] rounded-full w-full border-2  "
            src="images/logo-3.jpg"
          />
        </div>

        {/* Menu */}
        <div className="lg:w-[80%] justify-end hidden lg:flex items-center ">
          <ul className="flex items-center lg:gap-8 gap-5 lg:text-[20px] text-[18px] xl:text-[22px] font-semibold text-gray-200 dark:text-[#1E1E1E]">
            <li>
              <a className="hover:bg-[aqua] dark:hover:bg-blue-500" href="home">
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[aqua] dark:hover:bg-blue-500"
                href="about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[aqua] dark:hover:bg-blue-500"
                href="project"
              >
                Project
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[aqua] dark:hover:bg-blue-500"
                href="contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                className="hover:bg-[aqua] dark:hover:bg-blue-500"
                href="skills"
              >
                Skills
              </a>
            </li>
          </ul>
        </div>

        <div
          
          className="rounded-full xl:w-[10%] lg:w-[10%] md:w-[20%] sm:w-[27%] w-[32%]   justify-end  flex items-center "
        >
          <div onClick={toggleButton} className="md:w-[40%] w-[50%] lg:hidden md:flex flex overflow-x-hidden justify-end">
          {menuBar? <FaBars className="icons lg:text-[30px] md:text-[40px] sm:text-[40px] text-[35px] text-gray-200 dark:text-black "/> : <ImCross className="icons lg:text-[30px] md:text-[38px] sm:text-[40px] text-[35px] text-gray-200 dark:text-black "/>}
          </div>
          <div onClick={toggleDarkMode} className=" image-container lg:w-[100%] w-[45%] sm:w-[40%] md:w-[40%] justify-end flex  lg:bg-transparent ">
            <img
              className="image- xl:w-[35%] lg:w-[50%]  md:w-[72%] sm:w-[60%]  w-[50%]"
              src={darkMode ? "/images/Weather.svg" : "images/Sun.svg"}
            />
          </div>
          
        </div>
      </div>

      {/* Menu Bar */}

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
