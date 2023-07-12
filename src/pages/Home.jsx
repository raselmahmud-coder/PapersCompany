import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import StrategyAndEnvironment from "../component/StrategyAndEnvironment";
import Product from "../component/Product";
import Contact from "../component/Contact";
import Exhibitors from "../component/Exhibitors";
import Working from "../component/Working";
import HeroSlider from "../component/HeroSlider";
import AboutUs from "../component/About";

export default function Home() {
  return (
    <div className='w-full h-auto bg-slate-600 overflow-x-hidden'>
      <Navbar />
      <HeroSlider/>
      <AboutUs />
      <StrategyAndEnvironment />
      <Product />
      <Exhibitors />
      <Working />
      <Contact />
      <Footer />
    </div>
  );
}
