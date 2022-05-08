import type { NextPage } from "next";
import { Hero } from "../src/Sections/Hero";
import WhySection from "../src/Components/sections/WhySection";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <WhySection />
    </div>
  );
};

export default Home;
