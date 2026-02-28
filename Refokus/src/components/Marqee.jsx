export default function Marqee({ items }) {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="flex flex-shrink-0 gap-8 md:gap-20 py-5 md:py-7 pr-12 md:pr-24">
        {items.map((item, index) => {
          return (
            <img
              key={index}
              className="w-16 md:w-20 lg:w-[7vw] h-auto flex-shrink-0"
              src={item}
              alt="marqee image"
            />
          );
        })}
      </div>
    </div>
  );
}
