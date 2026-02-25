import { motion, useScroll } from "framer-motion";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import { useState } from "react";

export default function Work() {
  const [images, setImages] = useState([
    { url: img1, top: "50%", left: "50%", isActive: false },
    { url: img2, top: "55%", left: "45%", isActive: false },
    { url: img3, top: "45%", left: "55%", isActive: false },
    { url: img4, top: "60%", left: "60%", isActive: false },
    { url: img5, top: "65%", left: "47%", isActive: false },
    { url: img6, top: "70%", left: "49%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) == -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true },
        ),
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);

        break;
      case 3:
        imageShow([0, 1, 2]);

        break;
      case 4:
        imageShow([0, 1, 2, 3]);

        break;
      case 6:
        imageShow([0, 1, 2, 3, 4]);

        break;
      case 8:
        imageShow([0, 1, 2, 3, 4, 5]);

        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto  text-center text-white">
        <h1 className="text-[30vw] leading-none font-medium select-none tracking-tight">
          work
        </h1>

        <div className="absolute w-full h-full top-0 ">
          {images.map((elem, index) => {
            return (
              elem.isActive && (
                <img
                  key={index}
                  src={elem.url}
                  alt="Girl in a jacket"
                  className="absolute w-52 h-52 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
