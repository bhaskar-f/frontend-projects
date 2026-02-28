export default function Stripe({ val }) {
  return (
    <div className="flex items-center justify-between flex-1 min-w-[150px] sm:w-[16.66%] px-2 md:px-5 py-3 md:py-4 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600 mt-10 md:mt-20">
      <img src={val.url} alt="stripe" className="w-6 h-6 md:w-auto md:h-auto" />
      <span className="text-sm md:text-xl text-white font-semibold">
        {val.number}
      </span>
    </div>
  );
}
