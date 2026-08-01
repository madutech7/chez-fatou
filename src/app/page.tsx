"use client";

import { useLenis } from "@/hooks/useLenis";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Ticker from "@/components/ui/Ticker";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import VirtualTour from "@/components/sections/VirtualTour";
import Cuisine from "@/components/sections/Cuisine";
import Gallery from "@/components/sections/Gallery";
import Experience from "@/components/sections/Experience";
import Cocktails from "@/components/sections/Cocktails";
import Reviews from "@/components/sections/Reviews";
import Reservation from "@/components/sections/Reservation";
import Contact from "@/components/sections/Contact";

export default function Home() {
  useLenis();

  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Cuisine />
      <Gallery />
      <Experience />
      <Cocktails />
      <Reviews />
      <Reservation />
      <VirtualTour />
      <Contact />
      <Footer />
    </main>
  );
}
