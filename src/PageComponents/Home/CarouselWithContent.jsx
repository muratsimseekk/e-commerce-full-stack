import { Carousel, Typography, Button } from "@material-tailwind/react";

import hero2 from "../../assets/hero/hero2.jpg";
import hero4 from "../../assets/hero/heroCategory/hero4.jpg";
import hero1Mobile from "../../assets/hero/hero1-mobile.png";
export function CarouselWithContent() {
  return (
    <Carousel
      transition={{ duration: 1 }}
      className="xl:h-[calc(100vh_-_144px)] h-[60vh] w-full"
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
      <div className="relative w-full h-full">
        <img src={hero4} className="xl:h-full xl:w-full xl:block hidden  " />
        <img
          src={hero1Mobile}
          className="xl:h-full xl:w-full xl:hidden xl:object-cover h-full w-full "
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-full  flex flex-col gap-10 ml-8 xl:text-start md:w-3/4">
            <Typography
              variant="lead"
              color="white"
              className="uppercase text-lightText font-black tracking-normal text-lg text-center xl:text-start xl:text-xl xl:leading-normal xl:font-bold xl:opacity-80"
            >
              Summer 2023
            </Typography>
            <Typography
              variant="h1"
              color="white"
              className=" xl:text-3xl text-[38px] leading-tight xl:text-start text-center text-lightText uppercase  xl:tracking-wider"
            >
              New <br className="xl:hidden block" /> Collection
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="xl:tracking-wider text-lightText text-xl xl:text-start text-center tracking-wide"
            >
              We know how large objects <br className="xl:hidden block" /> will
              act,
              <br className="xl:block hidden" /> but things on a{" "}
              <br className="xl:hidden block" />
              small scale.
            </Typography>
            <div className="xl:text-start text-center">
              <Button
                size="lg"
                className="bg-successColor text-lightText  tracking-widest rounded-lg hover:cursor-pointer xl:px-12 text-lg uppercase"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={hero2}
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <div className="absolute  inset-0 grid h-full w-full place-items-center ">
          <div className="w-full mt-[74px]  flex flex-col gap-8  text-center md:w-3/4">
            <Typography
              variant="h1"
              color="white"
              className=" xl:text-3xl text-[38px] leading-tight text-center text-lightText uppercase  xl:tracking-wider"
            >
              Black Friday
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="tracking-wider text-lightText text-xl"
            >
              We know how large objects will act,
              <br className="xl:hidden block" /> but things on a{" "}
              <br className="xl:block hidden" />
              small scale <br className="xl:hidden block" />
              just do not act that way .
            </Typography>
            <div className="">
              <Button
                size="lg"
                className="bg-primaryColor text-lightText tracking-widest rounded-lg hover:cursor-pointer capitalize xl:px-12 text-lg "
              >
                Start Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
