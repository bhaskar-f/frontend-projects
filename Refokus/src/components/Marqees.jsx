import Marqee from "./Marqee";
import m1 from "../assets/m1.svg";
import m2 from "../assets/m2.svg";
import m3 from "../assets/m3.svg";
import m4 from "../assets/m4.svg";
import m5 from "../assets/m5.svg";
import m6 from "../assets/m6.svg";
import m7 from "../assets/m7.svg";
import m8 from "../assets/m8.svg";
import m9 from "../assets/m9.svg";
import m10 from "../assets/m10.svg";
import m11 from "../assets/m11.svg";
import m12 from "../assets/m12.svg";
import m13 from "../assets/m13.svg";
import m14 from "../assets/m14.svg";
import m15 from "../assets/spotify.svg";
import m16 from "../assets/accel.svg";
import m17 from "../assets/doxel.svg";
import m18 from "../assets/webflow.svg";

import Marquee from "react-fast-marquee";

export default function Marqees() {
  const images = [
    [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12],
    [m15, m16, m17, m18, m5, m6, m7, m8, m9, m10, m13, m14],
  ];
  return (
    <div className="py-20 mt-20 w-full relative overflow-hidden">
      {images.map((row, index) => (
        <Marquee
          key={index}
          speed={60}
          pauseOnHover={false}
          gradient={false}
          direction={index % 2 === 0 ? "left" : "right"}
        >
          <Marqee items={row} />
        </Marquee>
      ))}
    </div>
  );
}
