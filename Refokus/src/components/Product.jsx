import { useState } from "react";
import Button from "./Button";

export default function Product({ val, count, mover, bg }) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    backgroundColor: isHover && bg,
  };
  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="max-full h-auto md:h-[23rem] py-10 md:py-20 text-white px-4 md:px-0"
    >
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0"
      >
        <h1 className="text-3xl md:text-5xl font-semibold">{val.title}</h1>
        <div className="dets w-full md:w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Preview" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}
