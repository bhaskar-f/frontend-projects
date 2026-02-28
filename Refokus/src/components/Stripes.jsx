import Stripe from "./Stripe.jsx";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";

export default function Stripes() {
  const data = [
    {
      url: s1,
      number: 52,
    },
    {
      url: s2,
      number: 2,
    },
    {
      url: s3,
      number: 15,
    },
    {
      url: s1,
      number: 52,
    },
    {
      url: s2,
      number: 2,
    },
    {
      url: s3,
      number: 15,
    },
  ];
  return (
    <div className="w-full flex flex-wrap md:flex mt-5">
      {data.map((elem, index) => {
        return <Stripe key={index} val={elem} />;
      })}
    </div>
  );
}
