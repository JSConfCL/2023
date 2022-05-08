import type { NextPage } from "next";
import { Hero } from "../src/Sections/Hero";
import WhySection from "../src/Components/sections/WhySection";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <WhySection />
    </div>
  );
};

export default Home;
