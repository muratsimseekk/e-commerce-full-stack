import { Carousel } from "@material-tailwind/react";
import React from "react";
import { CarouselWithContent } from "./Home/CarouselWithContent";
import EditorPicks from "./Home/EditorPicks";
import BestSellerProducts from "./Home/BestSellerProducts";

function Home() {
  return (
    <>
      <CarouselWithContent />
      <EditorPicks />
      <BestSellerProducts />
    </>
  );
}

export default Home;
