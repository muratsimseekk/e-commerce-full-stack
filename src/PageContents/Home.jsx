import { Carousel } from "@material-tailwind/react";
import React from "react";
import { CarouselWithContent } from "./Home/CarouselWithContent";
import EditorPicks from "./Home/EditorPicks";
import BestSellerProducts from "./Home/BestSellerProducts";
import CarouselBottom from "./Home/CarouselBottom";

function Home() {
  return (
    <>
      <CarouselWithContent />
      <EditorPicks />
      <BestSellerProducts />
      <CarouselBottom />
    </>
  );
}

export default Home;
