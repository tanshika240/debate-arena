import React from "react";
import fallacy from "./fallacy.jpg";
import brain from "./brain.jpg";
function AiJudgeSection() {
  return (
    <section
      className="aijudge min-h-[70vh] w-full"
      style={{
        background: `radial-gradient(circle at 65% 40%, rgba(216,90,48,0.14), transparent 60%), #EDE6D8`,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="bg-white min-h-[45vh] mt-34 ml-12 px-7">
          <h2 className="heading1 font-bold text-black text-[5rem] font-playfair">
            The
            <span className="heading2 italic text-[#D85A30] text-[5rem] font-playfair">
              AI Judge
            </span>
          </h2>
          <p className="para text-4xl text-wrap mt-4 text-gray-600">
            Popularity doesn't equal truth. At the end of every 24-hour debate
            cycle, our AI judge steps in to deliver the final, unbiased verdict.
          </p>
          <div>
            <div className="flex items-center gap-6 mt-11">
              <div className="w-12 h-12">
                <img src={fallacy} />
              </div>
              <div>
                <h4 className="font-bold text-black text-4xl font-JetBrains">
                  Fallacy Detection
                </h4>
                <p className="text-3xl text-gray-600 text-wrap">
                  Instantly flags strawmen, ad hominems, and slippery slopes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="box2 bg-[#470d00] mt-34 mr-17 ml-20 px-8 py-8">
          <div className="flex items-center gap-8 mt-8 ml-12 mb-12">
            <div className="brain w-18 h-18">
              <img src={brain} />
            </div>
            <h4 className="uppercase font-extrabold text-5xl text-white font-JetBrains">
              JUDGE AI ANALYSIS
            </h4>
          </div>
          <hr className="my-8 border border-white/20" />
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="bg-[rgba(34,139,90,0.12)] border border-[rgba(216,90,48,0.4)] text-[#E89A6C] text-wrap text-2xl px-8 py-8">
              <span>
                WARNING:Strawman fallacy detected in Argument #42 by @LogicLord.
                −15 logic points
              </span>
            </div>
            <div className="bg-[rgba(34, 139, 90, 0.12)] border border-[rgba(34, 139, 90, 0.4)] text-[#6FCF97] text-wrap text-2xl px-8 py-8">
              <span>
                Verified:Citation by @DebateKing matches a credible source. +20
                evidence points
              </span>
            </div>
            <div className="bg-[rgba(212, 160, 60, 0.12)] border border-[rgba(212, 160, 60, 0.4)] text-[#E8C468] text-wrap text-2xl px-8 py-8">
              <span> FINAL VERDICT: SIDE [AGAINST] WINS BY 42 POINTS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AiJudgeSection;
