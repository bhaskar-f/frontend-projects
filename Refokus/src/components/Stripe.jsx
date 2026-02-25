export default function Stripe({ val }) {
  return (
    <div className="flex items-center justify-between w-[16.66%] px-5 py-4 border-t-[1px] border-r-[1px] border-b-[1px] border-zinc-600 mt-20">
      <img src={val.url} alt="stripe" />
      <span className="text-xl text-white font-semibold">{val.number}</span>
    </div>
  );
}
