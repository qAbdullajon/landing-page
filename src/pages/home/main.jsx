import React from "react";
import Video from "./video";
import About from "./about";
import Details from "./details";
import SwiperPage from "./swiper";
import Techniques from "./techniques";

export default function HomePage() {
  return (
    <main>
      <Techniques />
      <SwiperPage />
      <Video />
      <About />
      <Details />
    </main>
  );
}
