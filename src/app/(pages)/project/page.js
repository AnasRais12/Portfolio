"use client";
import React, { useEffect } from "react";

const Project = () => {
  const projects = [
    {
      name: "/Images/image.png",
      description:
        "In this project, I created the user homepage using Tailwind CSS for styling and responsive layouts. I implemented CRUD operations in the backend using Adonis.js to manage user data. The frontend was built with React.js, handling and interacting with data. SQL was used for the database to store and retrieve information.",
      tools: ["React", "Tailwind CSS", "Adonis.js", "SQL"],
    },
    {
      name: "O - E ",
      description:
        "In this project, I created the user homepage using Tailwind CSS for styling and responsive layouts. I implemented CRUD operations in the backend using Adonis.js to manage user data. The frontend was built with React.js, handling and interacting with data. SQL was used for the database to store and retrieve information.",
      tools: ["React", "Tailwind CSS", "Adonis.js", "SQL"],
    },
    {
      name: "M U H I B - E - W A T A N",
      description:
        "In this project, I created the user homepage using Tailwind CSS for styling and responsive layouts. I implemented CRUD operations in the backend using Adonis.js to manage user data. The frontend was built with React.js, handling and interacting with data. SQL was used for the database to store and retrieve information.",
      tools: ["React", "Tailwind CSS", "Adonis.js", "SQL"],
    },
    {
      name: "/Images/image.png",
      description:
        "In this project, I created the user homepage using Tailwind CSS for styling and responsive layouts. I implemented CRUD operations in the backend using Adonis.js to manage user data. The frontend was built with React.js, handling and interacting with data. SQL was used for the database to store and retrieve information.",
      tools: ["React", "Tailwind CSS", "Adonis.js", "SQL"],
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
      <div
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
                className={` sticky-card py-10 xl:bg-red-500 lg:bg-green-400 md:bg-slate-700  w-[80%] lg:w-[50%] md:px-6 lg:px-8 xl:px-10 shadow-custom  shadow-gray-700 dark:shadow-gray-900 bg-[#111111] dark:bg-gray-200   relative overflow-visible  justify-center flex text-[20px] font-bold font-sans rounded-lg transition-transform duration-500 ease-in-out transform opacity-70 hover:scale-110 hover:z-[9999]   `}
              >
                <div className="flex   text-center flex-col gap-8 w-full justify-center items-center ">
                  <img
                    src={project.name}
                    className={` bg-white dark:bg-transparent w-[30%] `}
                  />
                  <p
                    className={` text-gray-200 dark:text-Shade text-[20px] font-normal `}
                  >
                    {project.description}
                  </p>
                  <ul
                    className={` text-gray-200 dark:text-Shade mt-4  flex justify-center gap-10 text-[20px]`}
                  >
                    {project.tools.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                  {/* <div> 
                  <button className=" px-20 py-2 bg-[#219e9e] rounded-[5px] text-[23px] font-sans text-[white] font-bold  mt-[30px] mb-[10px]">Visit Site </button>
                  </div> */}
                  <div className="relative  mx-auto group flex justify-center">
                    <button
                      className={`p-4 bg-[#00ffff1a] dark:bg-blue-500 px-20   text-white rounded-md`}
                    >
                      Visit Site
                    </button>

                    {/* Hidden image with transition */}
                    <div className="absolute rounded-[1%] w-full top-[-90%] bg-white dark:bg-black text-black dark:text-white mt-2 opacity-0 group-hover:opacity-100 group-hover:top-[-210%] transition-all duration-500 ease-in-out">
                      <a href="https://richys.com/" target="blank">
                        <img src="/Images/image.png" alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
