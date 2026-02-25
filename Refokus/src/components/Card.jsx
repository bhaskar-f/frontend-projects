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
      className={`${width}  h-[65vh] bg-zinc-800 rounded-xl flex flex-col justify-between`}
    >
      <motion.div className="flex flex-col ">
        <div className="flex justify-between items-center flex-start">
          <h3 className="text-lg tracking-tighter">{ft}</h3>
          <IoIosArrowForward />
        </div>
        <h1 className="text-4xl mt-6 tracking-tighter">{mt}</h1>
      </motion.div>
      <div>
        {bt === true && (
          <div>
            <h1 className="text-8xl tracking-tightest font-semibold">
              Start a Project
            </h1>
            <button className="border-[1.5px] border-zinc-400 cursor-none text-xl font-semibold rounded-full py-2 px-5 mt-10 tracking-tight flex items-center">
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
