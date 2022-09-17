import React from "react";

type Props = {
  groupColor: string;
  groupColors: string;
};

export const Card = ({ groupColor, groupColors }: Props) => (
  <div
    className={`h-64 group flex  justify-center rounded-[20px] transition ease-in-out cursor-pointer duration-300 border-[2px] border-blue-50  bg-blue-50 shadow-white shadow-md ${groupColors}`}
  >
    <div className="">
      <div className="w-40 h-10 mt-7 mb-24   bg-primary"></div>
      <div
        className={`w-40 h-[50px] mt-7 rounded-full ${groupColor} bg-talentBlue-200`}
      >
        <h6 className="text-center text-white text-[19px] pt-2.5">Enter</h6>
      </div>
    </div>
  </div>
);
