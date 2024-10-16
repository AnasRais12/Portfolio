"use client";
import React, { useEffect } from "react";
import  { forwardRef } from "react";
import { FaGithub } from "react-icons/fa6";

const Project = forwardRef((props, ref) => {
  const projects = [
    {
      names: "Mystery Message",
      description:
        "With guidance, I have worked on key topics for building a production-ready app using Next.js, including Zod validation, database connections, and email setup with Resend. I implemented custom OTP for user signup and authentication with NextAuth, along with OTP verification, unique username checks, and AI feature integration. Additionally, I focused on advanced form handling with React Hook Form and Shadcn, message APIs with aggregation pipelines, and a user dashboard with carousel functionality. This project is still a work in progress, and I am actively working to complete it soon.",
      tools: ["Next.js", "Typescript", "React.js", "MongoDB"],
      link:"https://github.com/AnasRais12/mystery-message"
    },
    {
      names: "O - E ",
      description:
      "This project is an e-commerce website where users can easily browse products across various categories, add them to their cart, and check out. It includes components like the Navbar, Product listings, sections for Females and Kids, a SideBar, and a Checkout page for a seamless shopping experience",
      tools: ["React.js", "Tailwind CSS", ],
     link: " https://github.com/AnasRais12/uL-ux"
    },
    {
      names: "M U H I B - E - W A T A N",
      description:
        "In this project, I created the user homepage using Tailwind CSS for styling and responsive layouts. I implemented CRUD operations in the backend using Adonis.js to manage user data. The frontend was built with React.js, handling and interacting with data. SQL was used for the database to store and retrieve information.",
      tools: ["React.js", "Tailwind CSS", "Adonis.js", "SQL"],
    },
    {
      names: "Todo-List",
      description:    "This project is a Todo Application that utilizes the AdonisJS framework for the backend and React, Axios, and Moment.js for the frontend. It features CRUD (Create, Read, Update, Delete) functionalities that allow users to easily manage todo items and their subtasks.Users can add, edit, and delete their tasks, organizing them into pending, ongoing,and done categories, while also setting deadlines. Axios fetches data from the server in real-time, providing the ability to prioritize tasks through drag-and-drop functionality. This application offers an intuitive and user-friendly experience, making it a modern way to manage a todo list.",
      tools: ["React.js", "Tailwind CSS", "Adonis.js", "SQL"],
      link:"https://github.com/AnasRais12/Todos"
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
                className={` sticky-card py-10   sm:w-[80%] w-[90%]  md:w-[70%] lg:w-[60%] xl:w-[50%] px-6 lg:px-8 xl:px-10 shadow-custom  shadow-gray-700 dark:shadow-gray-500 bg-[#111111] dark:bg-gray-200   relative overflow-visible  justify-center flex text-[20px] font-bold font-sans rounded-lg transition-transform duration-500 ease-in-out transform opacity-70 hover:scale-110   `}
              >
                <div className=" project-card flex text-center flex-col gap-8 w-full justify-center items-center ">
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
                  {/* <div> 
                  <button className=" px-20 py-2 bg-[#219e9e] rounded-[5px] text-[23px] font-sans text-[white] font-bold  mt-[30px] mb-[10px]">Visit Site </button>
                  </div> */}
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
