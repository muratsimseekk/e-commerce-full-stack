import { Carousel } from "@material-tailwind/react";
import React from "react";
import { CarouselWithContent } from "./Home/CarouselWithContent";
import EditorPicks from "./Home/EditorPicks";
import BestSellerProducts from "./Home/BestSellerProducts";
import CarouselBottom from "./Home/CarouselBottom";
import AsianSection from "./Home/AsianSection";
import Featured from "./Home/Featured";

function Home() {
  return (
    <>
      <CarouselWithContent />
      <EditorPicks />
      <BestSellerProducts />
      <CarouselBottom />
      <AsianSection />
      <Featured />
    </>
  );
}

export default Home;
