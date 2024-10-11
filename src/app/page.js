"use client";
import React from "react";
import { useRef } from "react";
import Home from "./(pages)/home/page";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
import Contact from "./(pages)/contact/page";
import Project from "./(pages)/project/page";

const page = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <>
      <div className=" grid grid-cols-1  ">
        <Home aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} skillsRef={skillsRef} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Project ref={projectRef} />
        <Contact ref={contactRef} />
      </div>
      </>
    </>
  );
};

export default page;
