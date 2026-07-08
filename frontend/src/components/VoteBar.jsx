import React from "react";
function VoteBar({ ForPercent, AgainstPercent }) {
  return (
    <div className="space-y-1 w-full">
      <div className="w-full h-6 flex">
        <div
          style={{ width: `${ForPercent}%` }}
          className="bg-green-900 transition-all duration-500"
        />
        <div
          style={{ width: `${AgainstPercent}%` }}
          className="bg-red-900 transition-all duration-500"
        />
      </div>
      <div className="text-2xl flex justify-between">
        <span className="text-green-950 font-bold font-playfair py-1.5">
          {ForPercent}%
        </span>
        <span className="text-red-900 font-bold font-playfair py-1.5">
          {AgainstPercent}%
        </span>
      </div>
    </div>
  );
}
export default VoteBar;
