'use client';

import Footer from "@/components/Footer";
import Header from "@/bookingComponents/Header";
import Strip from "@/bookingComponents/Strip";
import Recommend from "@/bookingComponents/Recommend";

export default function Booking() {
  console.log("Booking Loaded")
  return (
    <>
      <main >
        <Header />
        <Strip />
        <Recommend />
      </main>
      <Footer />
    </>
  );
}
