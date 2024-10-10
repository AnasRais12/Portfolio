"use client";
import React from "react";
// import Home from "./(pages)/home/page";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
// import Contact from "./(pages)/contact/page";
import Project from "./(pages)/project/page";

const page = () => {
 
  return (
    <>
      <>
        <div className="grid grid-cols-1 py-2    ">
          {/* <Home /> */}
          <About />
          <Skills />
          <Project />
          {/* <Contact /> */}
        </div>
      </>
    </>
  );
};

export default page;
