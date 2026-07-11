import React from "react";
function Newdebate() {
  return (
    <>
      <section className="bg-[#222220] min-h-[50vh] w-full">
        <div className="flex flex-col items-center pt-50">
          <h2 className="text-[#E5E5D9] text-8xl mb-23 font-playfair font-bold">
            Ready to prove them wrong?
          </h2>
          <button className="text-[#E5E5D9] text-4xl bg-[#A8462A] px-12 py-4 uppercase border border-[#E5E5D9] hover:bg-red-900 font-semibold font-JetBrains">
            Start A New Debate
          </button>
        </div>
      </section>
      <footer className="bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] min-h-[30vh] w-full">
        <div className="flex flex-col items-center pt-30 gap-12">
          <span className="font-bold text-black text-5xl">
            Debate
            <span className="text-[#D85A30] font-bold italic text-5xl">
              Arena
            </span>
          </span>
          <p className="text-2xl text-gray-600 mt-12 ">
            &copy; 2026 Debate Arena. May the best argument win.
          </p>
        </div>
      </footer>
    </>
  );
}
export default Newdebate;
