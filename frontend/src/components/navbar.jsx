import React from "react";
import logo from "./logo_demo.jpg";
function Navbar() {
  return (
    <header className="w-full bg-[#f2e8d5] flex item px-8 py-4 h-20">
      <nav className="flex items-center justify-between w-full">
        <div className="logo flex items-center gap-2">
          <img
            src={logo}
            alt="Debate Arena Demo logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-black text-2xl">Debate</span>
          <span className="font-bold text-[#D85A30] italic text-2xl">
            Arena
          </span>
        </div>
        <ul className="other-pgs flex items-center gap-6 text-gray-800">
          <li>
            <a href="#">Live debates</a>
          </li>
          <li>
            <a href="#">Leaderboard</a>
          </li>
          <li>
            <a href="#">Past Verdicts</a>
          </li>
        </ul>
        <div className="links flex items-center gap-3 px-6 py-3">
          <button className="border border-black px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[#ebdec5] font-semibold text-gray-700">
            Sign in
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-[#ebdec5] transition-colors duration-200 font-semibold">
            Start A Debate
          </button>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
