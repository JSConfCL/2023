import type { NextPage } from "next";
import { Hero } from "../src/Sections/Hero";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
