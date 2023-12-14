import { Button, Carousel, Typography } from "@material-tailwind/react";
import React from "react";

import carousel1 from "../../assets/hero/carousel2/carousel2-1.png";
import carousel2 from "../../assets/hero/carousel2/carousel2-2.png";

function CarouselBottom() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="xl:h-[85vh] h-[135vh] bg-secondaryColorGreen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="relative h-full w-full">
        <img
          src={carousel1}
          className="absolute xl:right-[10%] xl:bottom-0 bottom-0 right-0 xl:h-4/5  xl:w-[31.5%] w-full"
        />
        <div className="absolute  inset-0 grid h-full w-full xl:place-items-center ">
          <div className="w-full flex absolute top-[218px] flex-col gap-10 xl:gap-10 xl:ml-8 xl:text-start text-center md:w-3/4">
            <Typography
              variant="lead"
              color="white"
              className="uppercase text-lightText text-xl xl:leading-normal xl:font-extrabold font-medium xl:tracking-normal tracking-wider xl:opacity-80"
            >
              Summer 2023
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className=" text-lightText capitalize xl:font-bold font-black xl:text-6xl text-4xl tracking-normal  xl:tracking-widest flex flex-col xl:gap-6"
            >
              <p>vita classic</p>
              <p>product</p>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="tracking-wide text-lightText text-xl"
            >
              <p className="xl:block hidden">
                {" "}
                We know how large objects will act, We know <br /> how are
                objects will act, We know
              </p>
              <p className="xl:hidden block text-white font-medium tracking-wider">
                We know how large objects <br /> will act, but things on a{" "}
                <br /> small scale.
              </p>
            </Typography>
            <div className="xl:flex xl:flex-row xl:items-center flex flex-col items-center gap-6 xl:gap-10">
              <p className="xl:text-2xl text-xl text-lightText font-semibold xl:font-bold">
                $16.48
              </p>
              <Button
                size="md"
                className="bg-successColor w-[40%] font-semibold tracking-wide text-sm xl:w-1/5  text-lightText  xl:tracking-widest rounded-md hover:cursor-pointer xl:text-base xl:font-semibold uppercase"
              >
                add to cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full ">
        <img src={carousel2} className="h-full w-full " />
        <div className="absolute  inset-0 grid h-full w-full place-items-center ">
          <div className="w-full  flex flex-col gap-10 ml-8 text-start md:w-3/4">
            <Typography
              variant="lead"
              color="white"
              className="uppercase text-gray-800 text-xl leading-normal font-extrabold opacity-80"
            >
              Summer 2023
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className=" text-gray-800 uppercase lg:text-6xl tracking-wider flex flex-col gap-6"
            >
              <p>it's a special </p>
              <p>gift</p>
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="tracking-wide text-gray-800 text-xl"
            >
              We know how large objects will act, but things on a <br /> small
              scale
            </Typography>
            <div className="">
              <Button
                size="lg"
                className="bg-primaryColor text-lightText  tracking-widest rounded-lg hover:cursor-pointer px-12 text-lg uppercase"
              >
                shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselBottom;
