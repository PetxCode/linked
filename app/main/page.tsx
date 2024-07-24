import React from "react";
import Screen2 from "./screen2";

const page = () => {
  return (
    <div className="grid grid-cols-10 w-full gap-5 h-[300px]">
      <div className="col-span-2 bg-red-200 border rounded-md">Screen 1</div>
      <div className="col-span-5 ">
        <Screen2 />
      </div>
      <div className="col-span-3 bg-green-200 border rounded-md">Screen 3</div>
    </div>
  );
};

export default page;
