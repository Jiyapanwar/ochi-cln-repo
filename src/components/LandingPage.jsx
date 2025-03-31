import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.4"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.3 }}
                    className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-red-500"
                  ></motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[.75]  font-['Founders_Grotesk_X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and provate companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p classname="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center  gap-1">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md  rounded-full">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
