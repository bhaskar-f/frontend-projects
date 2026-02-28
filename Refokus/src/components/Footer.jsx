export default function Footer() {
  return (
    <div className="w-full text-white mt-20 md:mt-32 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-10 items-start lg:items-end mb-10">
        <div className="w-full lg:basis-1/2">
          <h1 className="text-5xl md:text-7xl lg:text-[12.8rem] tracking-tighter font-semibold leading-tight">
            refokus.
          </h1>
        </div>
        <div className="w-full lg:basis-1/2 ml-0 md:ml-10 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
          <div className="flex flex-col">
            <h4 className="mb-5 text-sm md:text-lg capitalize text-zinc-400">
              socials
            </h4>
            {["instagram", "twitter (X)", "LinkedIn"].map((item, index) => {
              return (
                <a
                  className="my-1 hover:text-zinc-300 text-xs md:text-base cursor-none capitalize text-zinc-500"
                  key={index}
                  href="#"
                >
                  {item}
                </a>
              );
            })}
          </div>
          <div className="flex flex-col">
            <h4 className="mb-5 text-sm md:text-lg capitalize text-zinc-400">
              site maps
            </h4>
            {["Home", "Work", "culture", "news", "contact"].map(
              (item, index) => {
                return (
                  <a
                    className="my-1 hover:text-zinc-300 text-xs md:text-base cursor-none capitalize text-zinc-500"
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
            className="w-full md:basis-1/3 flex flex-col items-start md:items-end text-left md:text-right gap-4 md:gap-6
"
          >
            <h3 className="font-regular text-sm md:text-lg leading-tight md:leading-[25px]">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </h3>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt="someImage"
              className="bg-blue-900 px-2 md:px-4 py-1 w-24 md:w-32 mt-3 md:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
