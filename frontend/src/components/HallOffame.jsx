import React from "react";
import trophy from "./trophy.jpg";
import dp from "./pfp4.jpg";
import crown from "./crown.jpg";
import photo from "./pfp5.jpg";
import third from "./pfp6.jpg";
import fourth from "./pfp7.jpg";
import fifth from "./pfp8.jpg";
function HallOffame() {
  return (
    <section className="hall bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] min-h-[70vh] w-full">
      <div className="grid grid-cols-1">
        <div className="flex flex-col items-center">
          <div className="w-34 h-34 mt-30">
            <img src={trophy} />
          </div>
          <h2 className="font-bold text-black text-[9rem] mt-11 font-playfair">
            Hall Of Fame
          </h2>
          <p className="text-gray-800 text-5xl mt-4 font-semibold font-['Abel']">
            The most formidable minds in the arena this week
          </p>
        </div>
        <div className="bg-[#F8F5EC] rounded-xl shadow-sm px-12 py-8 w-[90%] mx-auto mb-4 mt-24">
          <div className="flex justify-between items-center gap-6 bg-white px-12 py-12 ">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold text-7xl mr-12 font-playfair">1</span>
              <img src={dp} className="w-22 h-22 rounded-full object-cover" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="first font-bold text-black text-4xl">
                    MarcusAurelius
                  </span>
                  <img src={crown} className="w-10 h-10" />
                </div>
                <span className="font-semibold text-gray-800 text-3xl px-3 py-1 rounded-full">
                  Logic Lord
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-4xl text-[#D85A30]">1420</div>
              <div className="uppercase font-semibold text-2xl text-gray-800">
                reputation
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 bg-white px-12 py-12 mt-12">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold text-7xl font-playfair mr-12">2</span>
              <img
                src={photo}
                className="w-22 h-22 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="first font-bold text-black text-4xl">
                    SocratesBurner
                  </span>
                  🔥
                </div>
                <span className="font-semibold text-gray-800 text-3xl px-3 py-1 rounded-full">
                  Devil's Advocate
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-4xl text-[#D85A30]">1120</div>
              <div className="uppercase font-semibold text-2xl text-gray-800">
                reputation
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 bg-white px-12 py-12 mt-12">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold font-playfair text-7xl mr-12">3</span>
              <img
                src={third}
                className="w-22 h-22 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="first font-bold text-black text-4xl">
                    DataDriven
                  </span>
                  🥉
                </div>
                <span className="font-semibold text-gray-800 text-3xl px-3 py-1 rounded-full">
                  Most Persuasive
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-4xl text-[#D85A30]">920</div>
              <div className="uppercase font-semibold text-2xl text-gray-800">
                reputation
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 bg-white px-12 py-12 mt-12">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold text-7xl font-playfair mr-12">4</span>
              <img
                src={fourth}
                className="w-22 h-22 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="first font-bold text-black text-4xl">
                    Contranian99
                  </span>
                </div>
                <span className="font-semibold text-gray-800 text-3xl px-3 py-1 rounded-full">
                  Instigator
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-4xl text-[#D85A30]">890</div>
              <div className="uppercase font-semibold text-2xl text-gray-800">
                reputation
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6 bg-white px-12 py-12 mt-12">
            <div className="flex items-center gap-4">
              <span className="text-gray-400 font-bold text-7xl font-playfair mr-12">5</span>
              <img
                src={fifth}
                className="w-22 h-22 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="first font-bold text-black text-4xl">
                    RationalTake
                  </span>
                </div>
                <span className="font-semibold text-gray-800 text-3xl px-3 py-1 rounded-full">
                  Fast checker
                </span>
              </div>
            </div>

            <div className="text-right">
              <div className="font-bold text-4xl text-[#D85A30]">820</div>
              <div className="uppercase font-semibold text-2xl text-gray-800">
                reputation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HallOffame;
