import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-20 gap-5">
      <div className="cardconatiner h-[50vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
          <img
            className=" w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute  rounded-full left-8 bottom-8 border-1 pl-2 pr-2 font-thin text-[#CDEA68] ">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className=" w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute  rounded-full left-8 bottom-8 border-1 pl-2 pr-2 font-thin  ">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className=" w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute rounded-full left-3 bottom-8 border-1 pl-2 pr-2  font-thin  ">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
