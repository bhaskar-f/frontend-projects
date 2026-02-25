export default function Footer() {
  return (
    <div className="w-full text-white mt-32">
      <div className="max-w-screen-xl mx-auto flex gap-10 items-end mb-10">
        <div className="basis-1/2 ">
          <h1 className="text-[12.8rem] tracking-tighter font-semibold ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 ml-10 flex justify-between">
          <div className="flex flex-col">
            <h4 className="mb-5 text-lg capitalize text-zinc-400">socials</h4>
            {["instagram", "twitter (X)", "LinkedIn"].map((item, index) => {
              return (
                <a
                  className="my-1 hover:text-zinc-300 text-base cursor-none capitalize text-zinc-500"
                  key={index}
                  href="#"
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h4 className="mb-5 text-lg capitalize text-zinc-400">site maps</h4>
            {["Home", "Work", "culture", "news", "contact"].map(
              (item, index) => {
                return (
                  <a
                    className="my-1 hover:text-zinc-300 text-base cursor-none capitalize text-zinc-500"
                    key={index}
                    href="#"
                  >
                    {item}
                  </a>
                );
              },
            )}
          </div>
          <div
            className="basis-1/3 flex flex-col items-end text-right gap-6
"
          >
            <h3 className="text-right font-regular text-lg leading-[25px]">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </h3>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt="someImage"
              className="bg-blue-900 px-4 py-1 w-32"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
