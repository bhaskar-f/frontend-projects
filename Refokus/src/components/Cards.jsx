import Card from "./Card";

export default function Cards() {
  return (
    <div className="max-w-screen-xl mx-auto flex gap-2 text-white mt-17">
      <Card
        width={"basis-1/3"}
        ft={"Up Next: News"}
        mt={"Insights and behind the scenes"}
        st={true}
        bt={false}
        index={0}
      />
      <Card
        width={"basis-2/3"}
        ft={"Get in touch"}
        mt={"Let's get to it, together."}
        st={false}
        bt={true}
        index={1}
      />
    </div>
  );
}
