import React from "react";
import pfp from "./pfp1.jpg";
import profile from "./pfp2.jpg";
import VoteBar from "./VoteBar";

function Debatefeed() {
  const ForVotes = 720;
  const AgainstVotes = 484;
  const ForPercent = Math.round((ForVotes / (ForVotes + AgainstVotes)) * 100);
  const AgainstPercent = 100 - ForPercent;
  return (
    <section
      className="debatefeed bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] min-h-[80vh] w-full"
    >
      <div>
        <div className="heading flex justify-between items-center py-16 px-12">
          <h2
            className="title font-black text-8xl"
            style={{ fontFamily: "'Playfair Display',serif" }}
          >
            Active
            <span className="italic text-[#D85A30]">Clashes</span>
          </h2>
          <button
            className="view text-[#D85A30] text-6xl hover:underline font-medium"
            style={{ fontFamily: "'Abel',sans-serif" }}
          >
            View All
          </button>
        </div>
        <div className="w-full px-10 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="w-full flex flex-col h-full justify-between px-12 py-12 bg-[#FDF6EC] border border-black/10 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-12">
              <button className="bg-green-900/10 text-green-900 font-semibold text-4xl px-6 py-2 ">
                TECHNOLOGY
              </button>
              <span>1204</span>
            </div>
            <h3 className="text-5xl font-bold mb-12 text-wrap font-playfair">
              Should performance-enhancing drugs be allowed under medical
              supervision?
            </h3>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-green-800 text-5xl uppercase font-semibold font-JetBrains ">
                  FOR
                </span>
                <div className="flex space-x-1 mt-5">
                  <img
                    src={pfp}
                    className="img w-20 h-20  border border-white rounded-full object-cover"
                  />
                  <img
                    src={profile}
                    className="w-20 h-20 border border-white -ml-5 rounded-full object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="text-[#D85A30] text-5xl font-semibold font-JetBrains ">
                  AGAINST
                </span>
                <div className="flex space-x-1 mt-5">
                  <img
                    src={profile}
                    className=" w-20 h-20 border border-white rounded-full object-cover"
                  />
                  <img
                    src={pfp}
                    className=" w-20 h-20 border border-white -ml-5 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <VoteBar ForPercent={ForPercent} AgainstPercent={AgainstPercent} />
            <hr className="my-12 border border-black/10 " />
            <div className="flex justify-between items-center">
              <button
                className="bg-green-900 text-[#FDF6EC] text-3xl w-167 h-16"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                JOIN FOR
              </button>
              <button
                className="bg-red-900 text-[#FDF6EC] text-3xl w-167 h-16"
                style={{ fontFamily: "'JetBrains Mono',monospace" }}
              >
                JOIN AGAINST
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col justify-between px-12 py-12 bg-[#FDF6EC] border border-black/10 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-12">
              <button className="bg-green-900/10 text-green-900 font-semibold text-4xl px-6 py-2">
                SOCIETY
              </button>
              <span>1204</span>
            </div>
            <h3 className="text-5xl font-bold mb-12 text-wrap font-playfair">
              Should governments ban facial recognition technology?
            </h3>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-green-800 text-5xl uppercase font-semibold font-JetBrains">
                  FOR
                </span>
                <div className="flex space-x-1 mt-5">
                  <img
                    src={pfp}
                    className="img w-20 h-20  border border-white rounded-full object-cover"
                  />
                  <img
                    src={profile}
                    className="w-20 h-20 border border-white -ml-5 rounded-full object-cover"
                  />
                </div>
              </div>

              <div>
                <span className="text-[#D85A30] text-5xl font-semibold font-JetBrains">
                  AGAINST
                </span>
                <div className="flex space-x-1 mt-6">
                  <img
                    src={profile}
                    className=" w-20 h-20 border border-white rounded-full object-cover"
                  />
                  <img
                    src={pfp}
                    className=" w-20 h-20 border -ml-5 border-white rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <VoteBar ForPercent={ForPercent} AgainstPercent={AgainstPercent} />
            <hr className="my-12 border border-black/10 " />
            <div className="flex items-center">
              <button className="w-346 uppercase h-16 bg-white text-3xl font-JetBrains font-semibold text-gray-400">
                SPECTATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Debatefeed;
