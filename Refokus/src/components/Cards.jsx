import Card from "./Card";

export default function Cards() {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-2 text-white mt-17 px-4 md:px-0">
      <Card
        width={"w-full lg:basis-1/3"}
        ft={"Up Next: News"}
        mt={"Insights and behind the scenes"}
        st={true}
        bt={false}
        index={0}
      />
      <Card
        width={"w-full lg:basis-2/3"}
        ft={"Get in touch"}
        mt={"Let's get to it, together."}
        st={false}
        bt={true}
        index={1}
      />
    </div>
  );
}
