import { easeIn, motion } from "framer-motion";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Card({ width, ft, mt, st, bt, index }) {
  return (
    <motion.div
      initial={{ padding: 20 }}
      whileHover={{
        padding: 25,
        backgroundColor: index === 1 && "#5c4bda",
      }}
      transition={{ ease: easeIn, duration: 0.3 }}
      className={`${width} h-auto md:h-[65vh] bg-zinc-800 rounded-lg md:rounded-xl flex flex-col justify-between p-4 md:p-5`}
    >
      <motion.div className="flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-base md:text-lg tracking-tighter">{ft}</h3>
          <IoIosArrowForward className="text-lg md:text-xl" />
        </div>
        <h1 className="text-2xl md:text-4xl mt-4 md:mt-6 tracking-tighter leading-tight">
          {mt}
        </h1>
      </motion.div>
      <div>
        {bt === true && (
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-8xl tracking-tightest font-semibold leading-tight">
              Start a Project
            </h1>
            <button className="border-[1.5px] border-zinc-400 cursor-none text-base md:text-lg md:text-xl font-semibold rounded-full py-2 px-4 md:px-5 mt-6 md:mt-10 tracking-tight flex items-center hover:bg-zinc-700 transition-colors">
              Contact us
            </button>
          </div>
        )}
        {st === true && (
          <h3 className="text-zinc-500">Explore what drives our team.</h3>
        )}
      </div>
    </motion.div>
  );
}
