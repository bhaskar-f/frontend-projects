import logo from "../assets/logo.svg";
import Button from "./Button";

export default function Nav() {
  return (
    <div className="max-w-screen-xl px-4 md:px-8 py-5 mx-auto flex items-center justify-between border-b-1 border-zinc-400">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-8 md:w-10" />
        <div className="ml-4 md:ml-20 flex gap-4 md:gap-14 text-white hover:opacity-70 transition-opacity text-sm md:text-base">
          {["Home", "Work", "Career", "", "News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span
                key={index}
                className="hidden md:inline-block w-[1px] h-5 bg-zinc-400"
              ></span>
            ) : (
              <a
                key={index}
                href="#"
                className="flex items-center gap-1 hidden sm:flex"
              >
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
