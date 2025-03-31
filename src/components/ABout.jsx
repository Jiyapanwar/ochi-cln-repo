import React from "react";

function ABout() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and
        hire great peo­ple.
      </h1>
      <div className="w-full border-t-[1px] mt-20 pt-5 border-[#a1b562] font-light flex items-center">
        <div className="w-1/2 h-65 flex items-start">
          <p>What you can expect:</p>
        </div>
        <div className="w-1/2   flex items-center ">
          <div className="w-1/2 ">
            <p>
              We partner with the companies and startups who make the world go
              round — they drive the net-zero economy, revolutionize crypto
              treasury management, build photonic chips, and open
              Michelin-starred restaurants.
            </p>
            <p className="pt-5">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="w-1/2  h=full flex flex-col pt-30 mt-20 pl-20 ">
            <p>S:</p>
            <div className="flex flex-col">
              <a>Instagram</a>
              <a>Behance</a>
              <a>Facebook</a>
              <a>Linkedin</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
}

export default ABout;
