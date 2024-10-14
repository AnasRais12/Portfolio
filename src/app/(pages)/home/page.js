'use client'
import React, {  useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Home = ({ aboutRef, projectRef, contactRef, skillsRef }) => {
  const homeRef = useRef(null);
  const sidebarRef = useRef(null);
  const [darkMode, setDarkMode] = useState(false);
  const [menuBar, setMenubar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleButton = () => {
    setMenubar((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", !darkMode);
  };

  // Scroll to section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenubar(false); // Close the menu when a link is clicked
    setIsMenuOpen(false); // Close the sidebar when a link is clicked
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-black dark:bg-[#44ccee] border-b-black border-2 relative">
        <div
          className={` navbar flex px-8 bg-gray md:px-20   bg-[#1E1E1E]  py-2 justify-between dark:bg-gray-100 font-Noto text-[#E0E0E0] w-[100%] sm:w-full fixed top-0 z-50 gap-8 items-center`}
        >
          {/* Logo */}
          <div className="logo sm:w-[10%] w-[13%] flex justify-start items-center overflow-x-hidden">
            <img
              className="xl:w-[60%] lg:w-[70%] md:w-[80%] rounded-full w-full border-2"
              src="images/logo-3.jpg"
              alt="Logo"
            />
          </div>

          {/* Menu */}
          <div className="lg:w-[80%] w-[0%] justify-end hidden lg:flex items-center">
            <ul className="flex items-center lg:gap-8 gap-5 lg:text-[20px] text-[18px] xl:text-[22px] font-semibold text-gray-200 dark:text-[#1E1E1E]">
              <li>
                <a
                  className="hover:bg-[aqua] dark:hover:bg-blue-500"
                  onClick={() => scrollToSection(homeRef)}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  className="hover:bg-[aqua] dark:hover:bg-blue-500"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="hover:bg-[aqua] dark:hover:bg-blue-500"
                  onClick={() => scrollToSection(projectRef)}
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[aqua] dark:hover:bg-blue-500"
                  onClick={() => scrollToSection(skillsRef)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="hover:bg-[aqua] dark:hover:bg-blue-500"
                  onClick={() => scrollToSection(contactRef)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-full xl:w-[10%]    lg:w-[10%] md:w-[20%] sm:w-[27%] w-[32%]   justify-end  flex items-center ">
            <div
              onClick={toggleButton}
              className="md:w-[40%] w-[50%] lg:hidden md:flex flex overflow-x-hidden justify-end "
            >
              {menuBar ? (
                <ImCross className="icons lg:text-[30px] md:text-[40px] sm:text-[40px] text-[35px] text-gray-200 dark:text-black transition-transform duration-500 ease-in-out transform rotate-180" />
              ) : (
                <FaBars className="icons lg:text-[30px] md:text-[38px] sm:text-[40px] text-[35px] text-gray-200 dark:text-black transition-transform duration-500 ease-in-out transform rotate-0" />
              )}
            </div>

            <div
              onClick={() => toggleDarkMode()}
              className=" image-container lg:w-[100%] w-[45%] sm:w-[40%] md:w-[40%] justify-end flex  lg:bg-transparent "
            >
              <img
                className="image- xl:w-[35%] lg:w-[50%]  md:w-[72%] sm:w-[60%]  w-[50%]"
                src={darkMode ? "/images/Weather.svg" : "images/Sun.svg"}
              />
            </div>
          </div>
          {menuBar && (
            <>
              <div
                ref={sidebarRef} // Ref for GSAP animation target
                className={`lg:hidden bloc slide  absolute sm:top-[85px] top-[85px] md:top-[8px]  rounded-[10px] sm:right-[1%] right-[2%]   bg-black  text-[aqua] w-[28%] sm:w-[25%]  md:w-[20%] py-5`}
              >
                <ul className="flex flex-col gap-6 lg:text-[20px] text-[14px] sm:text-[14px] md:text-[15px] xl:text-[22px] font-semibold text-[aqua] dark:text-[#1E1E1E]">
                  <li>
                    <a
                      className="hover:bg-[aqua] dark:hover:bg-blue-500"
                      onClick={() => scrollToSection(homeRef)}
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:bg-[aqua] dark:hover:bg-blue-500"
                      onClick={() => scrollToSection(aboutRef)}
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="hover:bg-[aqua] dark:hover:bg-blue-500"
                      onClick={() => scrollToSection(projectRef)}
                    >
                      Project
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-[aqua] dark:hover:bg-blue-500"
                      onClick={() => scrollToSection(skillsRef)}
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:bg-[aqua] dark:hover:bg-blue-500"
                      onClick={() => scrollToSection(contactRef)}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Menu Bar */}

        {/* Home Page-Start */}

        {/* Home Page - Start */}
        {/* Home Section - Start */}

        <div
          ref={homeRef}
          className="content2 md:mt-[72px] sm:mt-[70px] mt-[72px] justify-center flex items-center  px-[1%] lg:px-[3%]   py-[8px] w-full bg-dark_cloud dark:bg-light_cloud bg-cover bg-no-repeat"
        >
          <div className="w-full  grid sm:grid-cols-1 md:grid-cols-2 sm:gap-2 gap-0  py-10 md:py-[50px]  ">
            <div className=" w-full text-center  md:text-start items-center md:items-start justify-center text-[#E0E0E0] lg:pt-[50px]   py-[20px] flex flex-col  px-5">
              <h1
                className={`w-full lg:text-[4.5vw] md:text-[4.8vw] sm:text-[50px] text-[40px]  text-[#E0E0E0] dark:text-[#242424] tracking-tighter font-extrabold font-sans`}
              >
                Hi, I'm <span className="ml-1">Anas</span>
                <span className="ml-2">Baig</span>
              </h1>
              <h1
                className={` font-sans tracking-normal sm:text-[50px] text-[40px] font-extrabold md:text-[4.3vw] lg:text-[4.3vw] text-[aqua] dark:text-blue-500`}
              >
                Frontend Developer
              </h1>
              <h2
                className={`md:text-[1.8vw] lg:text-[1.8vw] hidden md:block font-sans font-normal text-[#ffffff] dark:text-black mt-[10px] mb-[20px]`}
              >
                My goal is to transform ideas into fully functional and visually
                appealing web applications.
              </h2>
              <a className="" href="/documents/Anas.pdf" download={"Anas.pdf"}>
                <button
                  className={`bg-[aqua] dark:bg-blue-500 font-sans text-white rounded-[10px] py-2  px-20 sm:px-28 md:px-20 md:py-2 lg:py-4 lg:px-36 text-[20px] lg:text-[23px] md:mt-[0px] mt-[20px]  font-bold hover:scale-125 duration-300`}
                >
                  Resume
                </button>
              </a>
            </div>
            <div className=" md:block hidden  text-[#E0E0E0] ">
              <div className="  flex sm:justify-end justify-center  ">
                <img
                  className="sm:w-full w-[80%] "
                  src="/images/webdev.svg"
                  alt="Web Development Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
