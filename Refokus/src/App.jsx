import Cards from "./components/Cards";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import Marqees from "./components/Marqees";
import Nav from "./components/Nav";
import Products from "./components/Products";

import Stripes from "./components/Stripes";
import Work from "./components/Work";

import LocomotiveScroll from "locomotive-scroll";

export default function App() {
  const scroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 overflow-x-hidden">
      <CustomCursor />
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marqees />
      <Cards />
      <Footer />
    </div>
  );
}
