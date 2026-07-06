import React from "react";

function Hero() {
  return (
    <section className="hero-1 bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] w-screen">
      <div className="content flex flex-col items-center text-center gap-6 py-24 px-8">
        <button className="bg-[#D85A30]/20 rounded-full border border-[#D85A30] hover:bg-[#f95d5f] text-[#D85A30] font-semibold text-sm py-1.5 px-4">
          🔥 Session - live now!
        </button>
        <div className="max-w-4xl">
          <h1 className=" text-black font-black leading-none text-[8rem] tracking-tight m-0 font-playfair">
            Ideas clash.
          </h1>
          <h1 className="text-[#D85A30] italic leading-none tracking-tight text-[8rem] m-0 font-playfair">
            The AI judges
          </h1>
        </div>
        <p className="font-light text-2xl text-gray-600 py-2">
          Step into the arena. Pick a side,build your argument, rally the
          audience, and face the final verdict of the AI Judge.
        </p>
        <div className="space-x-4 flex items-center">
          <button className="bg-black hover:bg-black-600 text-gray-50 border-2 border-gray-200 py-1.5 px-4 font-abel">
            ENTER THE ARENA
          </button>
          <button className="bg-[#fff8d4] hover:bg-gray-200 border border-gray-300 py-1.5 px-4 font-abel">
            WATCH LIVE
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
