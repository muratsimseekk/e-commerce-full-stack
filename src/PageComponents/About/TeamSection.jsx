import React from "react";
import member1 from "../../assets/hero/about/team/member1.png";
import member2 from "../../assets/hero/about/team/member2.png";
import member4 from "../../assets/hero/about/team/member4.png";
import member5 from "../../assets/hero/about/team/member5.png";
import member7 from "../../assets/hero/about/team/member7.png";
import member8 from "../../assets/hero/about/team/member8.png";

function TeamSection() {
  return (
    <div className=" py-24 flex justify-center">
      <div className="w-4/5  flex flex-col gap-20">
        <div className="flex flex-col items-center text-center gap-8 xl:gap-4">
          <h2 className="capitalize text-textColor font-bold text-4xl xl:block hidden tracking-wider">
            meet our team
          </h2>
          <h2 className="capitalize text-textColor font-bold text-5xl xl:hidden block tracking-normal">
            meet our
            <br /> team
          </h2>
          <p className="text-secondText xl:block hidden tracking-wide">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
          <p className="text-secondText xl:hidden block font-semibold tracking-wide">
            Problems trying to resolve
            <br /> the conflict between the two major
            <br /> realms of Classical physics:
            <br /> Newtonian mechanics
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-col items-center gap-10 xl:flex xl:flex-row xl:justify-between xl:items-start xl:flex-wrap  xl:gap-x-0 xl:gap-y-20 w-5/6">
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member1} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize xl:text-start text-center font-semibold tracking-wider">
                  jacob jones
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member2} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize xl:text-start text-center  font-semibold tracking-wider">
                  Kathryn Murphy
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member1} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Eleanor Pena
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member4} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Marvin McKinney
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member5} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Floyd Miles
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member4} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Jenny Wilson
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member7} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Ronald Richards
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member8} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Dianne Russell
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
            <div className="xl:flex xl:flex-row flex flex-col  gap-6 xl:w-1/3 items-center">
              <img src={member7} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider xl:text-start text-center ">
                  Devon Lane
                </h4>
                <p className="text-sm xl:text-start text-center ">
                  {" "}
                  Mitsubishi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
