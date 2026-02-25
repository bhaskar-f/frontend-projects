export default function Marqee({ items }) {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="flex flex-shrink-0 gap-20 py-7 pr-24">
        {items.map((item, index) => {
          return (
            <img
              key={index}
              className="w-[7vw]"
              src={item}
              alt="marqee image"
            />
          );
        })}
      </div>
    </div>
  );
}
