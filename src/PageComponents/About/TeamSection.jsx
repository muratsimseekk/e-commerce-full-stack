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
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="capitalize text-textColor font-bold text-4xl tracking-wider">
            meet our team
          </h2>
          <p className="text-secondText tracking-wide">
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="flex justify-between flex-wrap  gap-y-20 w-5/6">
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member1} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  jacob jones
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member2} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Kathryn Murphy
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member1} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Eleanor Pena
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member4} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Marvin McKinney
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member5} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Floyd Miles
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member4} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Jenny Wilson
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member7} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Ronald Richards
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member8} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Dianne Russell
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
            <div className="flex gap-6 w-1/3 items-center">
              <img src={member7} className="w-24 h-24" />
              <div className="flex flex-col gap-3">
                <h4 className="capitalize font-semibold tracking-wider">
                  Devon Lane
                </h4>
                <p className="text-sm"> Mitsubishi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
