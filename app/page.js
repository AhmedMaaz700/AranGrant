'use client';

import Footer from "@/components/Footer";
import styles from "./page.module.css";
import FAQ from "@/components/FAQ";
import WorkWith from "@/components/WorkWith";
import Asset from "@/components/Asset";
import Strip from "@/components/Strip";
import Flights from "@/components/Flights";
import Header from "@/components/Header";

export default function Home() {
  console.log("Loaded")
  return (
    <>
      <main className={styles.main}>
        <Header />
        <Strip />
        <Flights />
        <Asset />
        <WorkWith />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
