import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import ABout from "./components/ABout";
import Play from "./components/Play";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen  text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <ABout />
      <Play />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
