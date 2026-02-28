import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import a from "../assets/arqitel.webm";
import ttr from "../assets/ttr.webm";
import yir1 from "../assets/yearinreview.webm";
import yir from "../assets/yir.webm";
import yahoo from "../assets/yahoo.webm";
import jungle from "../assets/jungle-4-3-.webm";
import silvr from "../assets/silvr.webm";
import showcase from "../assets/showcase_4_3.mp4";

export default function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      bg: "#0335fc",
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      bg: "#5b2fcc",
    },
    {
      title: "YIR 2021",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      bg: "#171345",
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
      bg: "#6d61f2",
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      bg: "#9fb5a3",
    },
    {
      title: "Jungle",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      bg: "blue",
    },
    {
      title: "Silvr",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      bg: "#bf8f5c",
    },
    {
      title: "Showcase",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      bg: "#dd8a30",
    },
  ];

  const [pos, setPos] = useState();

  function mover(index) {
    setPos(index * 23);
  }

  return (
    <div className="relative mt-32 ">
      {products.map((item, index) => (
        <Product
          key={index}
          val={item}
          bg={item.bg}
          count={index}
          mover={mover}
        />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{
            y: pos,
            x: "-50%",
          }}
          animate={{
            y: pos + `rem`,
          }}
          transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
          className="absolute w-72 md:w-96 lg:w-[32rem] h-48 md:h-64 lg:h-[23rem] left-1/2 md:left-[44%] rounded-lg md:rounded-3xl overflow-hidden bg-sky-400"
        >
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-100"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={a} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-300"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={ttr} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={yir1} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={yir} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-900"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={yahoo} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-900"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={jungle} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-900"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={silvr} />
            </video>
          </motion.div>
          <motion.div
            animate={{
              y: -pos + `rem`,
            }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            className="w-full h-full bg-sky-900"
          >
            <video
              className="absolute object-cover rounded-3xl"
              autoPlay
              muted
              loop
            >
              <source src={showcase} />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
