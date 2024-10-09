"use client";
import { techStack } from "@/constant";

const Skills = () => {
  return (
    <>
      <div
        className={`boxes-skill relative w-full py-16  bg-[#0f0d0d] dark:bg-white  border-b-4 font-bold flex flex-col gap-8`}
      >
        <h1
          className={`text-center font-semibold font-Noto text-white dark:text-heading   md:text-[50px] sm:text-[50px] text-[40px]   lg:text-[50px]  `}
        >
          S k i l l s
        </h1>

        <div>
          <div className="gap-10 px-[2%] lg:px-[8%]   py-[2%] grid md:grid-cols-3 grid-cols-2 justify-between font-sans text-[18px] items-center">
            {techStack.map((el, index) => (
              <div
                key={index}
                // Store reference to each box
                className=" box2 sm:justify-center justify-center py-4 px-4 bg-gray-50 shadow-custom  shadow-gray-500 md:m-4  mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer duration-500"
              >
                <img alt="" src={el.link} className="sm:w-12 w-8 " />
                <h4 className=" text-[16px] xl:text-[23px]  sm:text-[20px] ml-3 sm:ml-4">{el.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
