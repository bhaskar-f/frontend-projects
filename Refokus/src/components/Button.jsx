import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Button({ title = "GetStarted" }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative min-w-40 h-11 bg-zinc-100 px-4 py-2 text-black rounded-full flex items-center justify-between overflow-hidden"
    >
      <motion.span
        variants={{
          rest: { y: 0 },
          hover: { y: -40 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-[10%] text-sm font-medium select-none "
      >
        {title}
      </motion.span>
      <motion.span
        variants={{
          rest: { y: 40 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-[10%] text-sm font-medium select-none"
      >
        {title}
      </motion.span>
      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: -8 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute right-3 top-1/2 -translate-y-1/2 select-none "
      >
        <BsArrowReturnRight />
      </motion.span>
    </motion.div>
  );
}
