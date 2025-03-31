import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Hero from "./hero";
import Techniques from "./techniques";
import SwiperPage from "./swiper";
import Video from "./video";
import About from "./about";
import Details from "./details";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Techniques />
        <SwiperPage />
        <Video />
        <About />
        <Details />
      </main>
      <Footer />
    </>
  );
}
