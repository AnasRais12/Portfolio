"use client";
import React, { useEffect } from "react";
import  { forwardRef } from "react";
import { FaGithub } from "react-icons/fa6";

const Project = forwardRef((props, ref) => {
  const projects = [
  
    {
      names: "O - E ",
      description:
      "This project is an e-commerce website where users can easily browse products across various categories, add them to their cart, and check out. It includes components like the Navbar, Product listings, sections for Females and Kids, a SideBar, and a Checkout page for a seamless shopping experience",
      tools: ["React.js", "Tailwind CSS", ],
     link: " https://github.com/AnasRais12/uL-ux"
    },
   
    {
      names: "Todo-List",
     description: "This Todo Application uses AdonisJS for the backend and Next, Axios, and Moment.js for the frontend. It features CRUD functionalities for managing tasks and subtasks with deadlines, real-time data fetching, and drag-and-drop prioritization, offering an intuitive way to manage todo lists.",
     tools: ["Next.js", "Tailwind CSS","Adonis.js","MYSQL","Typescript"],
      link:"https://github.com/AnasRais12/Todos"
    },
    {
      names: "Mystery Message",
      description:"With guidance, I developed a production-ready Next.js app, focusing on Zod validation, database integration, and email setup with Resend. I implemented custom OTP signup, NextAuth authentication, and AI features, along with advanced form handling and user dashboard functionality. The project is ongoing and nearing completion.",
     tools: ["Next.js", "Tailwind CSS","Typescript","MongoDB"],

      link:"https://github.com/AnasRais12/mystery-message"
    },
   
   
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stickyCards = document.querySelectorAll(".sticky-card");
      stickyCards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add("active");
        } else {
          card.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // Select the SVG path
  }, []);

  return (
    <>
      <div ref={ref}
        className={`project bg-[#121212] dark:bg-gray-100 relative w-full py-16  border-b-4 font-bold flex flex-col gap-24`}
      >
        <h1
          className={`text-center font-semibold font-Noto text-white dark:text-heading   md:text-[50px] sm:text-[50px] text-[40px]   lg:text-[50px] `}
        >
          P r o j e c t s
        </h1>
        <div className="projects-container    ">
          <div className="flex flex-col items-center gap-4 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`sticky-card py-10 sm:w-[80%] w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] px-6 lg:px-8 xl:px-10 shadow-custom shadow-gray-700 dark:shadow-gray-500 bg-[#111111] dark:bg-gray-200 relative overflow-visible justify-center flex text-[20px] font-bold font-sans rounded-lg transition-transform duration-500 ease-in-out transform opacity-70 hover:scale-110 z-0 hover:opacity-100 hover:z-10`}
              >
                <div className=" project-card flex text-center flex-col gap-8 w-full justify-center items-center   ">
                  <h1 className=" project-heading md:text-[38px] sm:text-[35px] text-[30px] lg:text-[40px]  dark:text-gray-900 text-gray-200 pb-3 border-b-2 dark:border-b-black    ">{project.names}</h1>
                  <p
                    className={`project-para text-gray-200 dark:text-Shade text-[16px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[22px] font-normal `}
                  >
                    {project.description}
                  </p>
                  <ul
                    className={` tools text-gray-200 dark:text-Shade mt-4 flex-wrap  flex justify-center text-[15px] sm:text-[17px] md:text-[19px] gap-5 sm:gap-6 md:gap-10 lg:text-[20px] xl:text-[22px]`}
                  >
                    {project.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                 
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button
            className={`pro-button py-2 flex justify-center sm:text-[25px] text-[22px] md:text-[25px] lg:text-[30px] items-center lg:gap-3 gap-2 bg-[#00ffff1a] dark:bg-blue-500 px-16 sm:px-20 text-white rounded-md hover:scale-125 duration-500 hover:px-10`}
          >
            Visit <span className=""><FaGithub className="dark:text-black text-gray-200"/></span>
          </button>
        </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

export default Project;
