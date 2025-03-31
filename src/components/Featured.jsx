import { motion, useAnimation } from "framer-motion";
import React from "react";
import { useState } from "react";
import { Power4 } from "gsap";

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-6xl font-['Neue_Montreal' tracking-tight ">
          Featured Projects
        </h1>
      </div>

      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[65vh] "
          >
            <h1 className="absolute flex whitespace-nowrap text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl font-semibold">
              {"SALIENCE LABS".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 2, 0.36, 1], delay: index * 0.03 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt="salience labs"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="relative cardcontainer w-1/2 h-[65vh] "
          >
            <div className="card w-full h-full  rounded-xl overflow-hidden">
              <h1 className="font-semibold flex overflow-hidden absolute whitespace-nowrap text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
                {"CARDBOARD SPACESHIP".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 2, 0.36, 1],
                      delay: index * 0.03,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt="Cardboard spaceship"
                className="w-full h-full object-cover"
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
