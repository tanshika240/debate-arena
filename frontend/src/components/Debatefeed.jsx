import React from "react";
import pfp from "./pfp1.jpg";
import profile from "./pfp2.jpg";

function Debatefeed() {
  return (
    <section
      className="debatefeed bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] 
    h-screen w-screen"
    >
      <div>
        <div className="heading flex justify-between items-center py-16 px-8">
          <h2
            className="title font-black text-6xl"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Active<span className="italic text-[#D85A30]">Clashes</span>
          </h2>
          <button
            className="view text-[#D85A30] text-4xl hover:underline font-medium"
            style={{ fontFamily: "'Abel',sans-serif" }}
          >
            View All
          </button>
        </div>
        <div className="w-screen px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="bg-linear-to-br from-[#FFFDF9] to-[#F8E4D9] p-6 shadow-sm">
            <div className="flex justify-between items-center py-5">
              <button className="bg-green-900/10 text-green-900 font-semibold text-md px-3 py-1 ">
                TECHNOLOGY
              </button>
              <span>1204</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-wrap font-playfair">
              Should AI replace traditional university exams?
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-green-800 text-2xl uppercase font-bold font-abel">
                  FOR
                </span>
                <div className="flex space-x-1 mt-1">
                  <img
                    src={pfp}
                    className="img w-8 h-8  border border-white rounded-full object-cover"
                  />
                  <img
                    src={profile}
                    className="w-8 h-8 border border-white -ml-2 rounded-full object-cover"
                  />
                </div>
              </div>
              <progress
                className="w-full h-3 overflow-hidden [&::-webkit-progress-bar]:bg-[#D85A30] [&::-webkit-progress-value]:bg-green-500 [&::-moz-progress-bar]:bg-green-500"
                value={60}
                max={100}
              />
              <div>
                <span className="text-[#D85A30] text-2xl font-bold font-abel">
                  AGAINST
                </span>
                <div className="flex space-x-1 mt-1">
                  <img
                    src={profile}
                    className=" w-8 h-8 border border-white rounded-full object-cover"
                  />
                  <img
                    src={pfp}
                    className=" w-8 h-8 border border-white -ml-2 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-[#FFFDF9] to-[#F8E4D9] p-6 shadow-sm">
            <div className="flex justify-between items-center py-5">
              <button className="bg-green-900/10 text-green-900 font-semibold text-md px-3 py-1 ">
                SOCIETY
              </button>
              <span>1204</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-wrap font-playfair">
              Is social media making people lonier?
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <span className="text-green-800 text-2xl uppercase font-bold font-abel">
                  FOR
                </span>
                <div className="flex space-x-1 mt-1">
                  <img
                    src={pfp}
                    className="img w-8 h-8  border border-white rounded-full object-cover"
                  />
                  <img
                    src={profile}
                    className="w-8 h-8 border border-white -ml-2 rounded-full object-cover"
                  />
                </div>
              </div>
              <progress
                className="w-full h-3 overflow-hidden [&::-webkit-progress-bar]:bg-[#D85A30] [&::-webkit-progress-value]:bg-green-500 [&::-moz-progress-bar]:bg-green-500"
                value={60}
                max={100}
              />
              <div>
                <span className="text-[#D85A30] text-2xl font-bold font-abel">
                  AGAINST
                </span>
                <div className="flex space-x-1 mt-1">
                  <img
                    src={profile}
                    className=" w-8 h-8 border border-white rounded-full object-cover"
                  />
                  <img
                    src={pfp}
                    className=" w-8 h-8 border border-white rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Debatefeed;
