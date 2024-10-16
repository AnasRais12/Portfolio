"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import Home from "./(pages)/home/page";
import About from "./(pages)/about/page";
import Skills from "./(pages)/skills/page";
import Contact from "./(pages)/contact/page";
import Project from "./(pages)/project/page";

const page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark", !darkMode);
  };
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, [])
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  return (
      <>
      <div className=" grid grid-cols-1  ">
        <Home aboutRef={aboutRef} projectRef={projectRef} contactRef={contactRef} skillsRef={skillsRef} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <About ref={aboutRef} />
        <Project ref={projectRef} />
        <Skills ref={skillsRef} />
        <Contact ref={contactRef} darkMode={darkMode} />
      </div>
      </>
  );
};

export default page;
