import React from "react";

const StepCount = () => {
  return (
    <div className="w-full flex flex-col justify-between gap-4">
      <p>STEP 1/2</p>
      <div className="flex gap-2">
        <div className="h-3 w-1/2 bg-slate-300 rounded bottom" />
        <div className="h-3 w-1/2 bg-slate-300 rounded bottom-0" />
      </div>
    </div>
  );
};

export default StepCount;
