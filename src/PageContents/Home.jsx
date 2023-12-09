import { Carousel } from "@material-tailwind/react";
import React from "react";
import { CarouselWithContent } from "./Home/CarouselWithContent";
import EditorPicks from "./Home/EditorPicks";

function Home() {
  return (
    <>
      <CarouselWithContent />
      <EditorPicks />
    </>
  );
}

export default Home;
