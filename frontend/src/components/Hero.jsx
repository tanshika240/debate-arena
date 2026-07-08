import React from "react";

function Hero() {
  return (
    <section className="hero-1 bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] w-screen">
      <div className=" min-h-[70vh] content flex flex-col items-center text-center gap-6 py-24 px-8">
        <button className="bg-[#D85A30]/20 rounded-full border border-[#D85A30] hover:bg-[#f95d5f] text-[#D85A30] font-semibold text-3xl py-3.5 px-9 mb-15 mt-25">
          🔥 Session - live now!
        </button>
        <div className="max-w-9xl">
          <h1 className=" text-black font-black leading-none text-[11rem] tracking-tight m-0 font-playfair">
            Ideas clash.
          </h1>
          <h1 className="text-[#D85A30] italic leading-none tracking-tight text-[13rem] m-0 font-bold font-playfair">
            The AI judges
          </h1>
        </div>
        <p className=" text-3xl text-black py-7 text-wrap">
          Step into the arena. Pick a side,build your argument, rally the
          audience, and face the final verdict of the AI Judge.
        </p>
        <div className="gap-72 flex items-center">
          <button className="bg-black hover:bg-black-600 text-gray-50 border-2 text-2xl border-gray-200 w-67 h-23 font-abel">
            ENTER THE ARENA
          </button>
          <button className="bg-[#fff8d4] hover:bg-gray-200 border border-gray-300 py-1.5 px-4 w-67 h-23 text-2xl font-abel">
            WATCH LIVE
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
