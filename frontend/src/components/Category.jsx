import React from "react";
function Category() {
  return (
    <section className="w-full bg-linear-to-b from-[#F3EEDD] to-[#F5D9C8] border-y border-gray-300">
      <div className="flex justify-center gap-3 px-4 py-1.5">
        <button
          className="bg-black text-gray-200 text-sm font-semibold rounded-md px-4 py-2"
          style={{ fontFamily: "'abel',sans-serif" }}
        >
          Trending
        </button>
        <button
          className="bg-white hover:bg-gray-400/10 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md px-4 py-2"
          style={{ fontFamily: "'abel',sans-serif" }}
        >
          Technology
        </button>
        <button
          className="bg-white hover:bg-gray-400/10  border border-gray-300 text-gray-700 text-sm font-semibold rounded-md px-4 py-2"
          style={{ fontFamily: "'abel',sans-serif" }}
        >
          Ethics
        </button>
        <button
          className="bg-white hover:bg-gray-400/10 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md px-4 py-2"
          style={{ fontFamily: "'abel',sans-serif" }}
        >
          Politics
        </button>
        <button
          className="bg-white hover:bg-gray-400/10 border border-gray-300 text-gray-700 text-sm font-semibold rounded-md px-4 py-2"
          style={{ fontFamily: "'abel',sans-serif" }}
        >
          Student life
        </button>
        <button
          className="bg-white border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-400/10 rounded-md px-4 py-2"
          style={{ fontFamily: "'abel',sans-serif" }}
        >
          Hypothetical
        </button>
      </div>
    </section>
  );
}
export default Category;
