import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Nav() {
  return (
    <div className="max-w-screen-xl  py-5 mx-auto flex  items-center justify-between border-b-1 border-zinc-400">
      <div className="flex items-center">
        <img src={logo} alt="Logo" />
        <div className="ml-20  flex gap-14 text-white hover:opacity-70 transition-opacity">
          {["Home", "Work", "Career", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span
                key={index}
                className="inline-block w-[1px] h-5 bg-zinc-400"
              ></span>
            ) : (
              <a key={index} href="#" className="flex  items-center gap-1">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      <Button />
    </div>
  );
}
