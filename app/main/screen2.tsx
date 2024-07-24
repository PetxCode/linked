import React from "react";
import { MdCancel, MdMenu } from "react-icons/md";

const Screen2 = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col ">
      <div className="flex gap-2 w-full px-4 py-4 flex-col bg-white rounded-md">
        <div className="flex gap-2">
          <div className="w-[40px] h-[40px] rounded-[100%] bg-black  "></div>
          <input
            type="text"
            placeholder=""
            className="w-full rounded-full bg-slate-500"
          />
        </div>
        <div className="flex justify-between items-center px-5">
          <div>Media</div>
          <div>Event</div>
          <div>Write Article</div>
        </div>
      </div>
      <div className="w-full mt-5 bg-white rounded-md px-4 py-4 ">
        <div className="flex gap-2 justify-between items-start border-b-black">
          <div className=" flex gap-2">
            <div className="w-[40px] h-[40px] rounded-[100%] bg-black "></div>
            <div className="flex flex-col">
              <p className="font-bold">Ashele caleb</p>
              <p className="font-normal">Chairman of Next</p>
            </div>
          </div>

          <div className="flex gap-2">
            <MdMenu />
            <MdCancel />
          </div>
        </div>
        <div className="w-full h-[500px]  mt-5"></div>
      </div>
    </div>
  );
};

export default Screen2;
