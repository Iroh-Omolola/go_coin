import React from "react";

type Props = {
  groupColor: string;
  groupColors: string;
  primary: string;
  companyName: string;
  companyText: string;
};

export const GiftCard = ({
  groupColor,
  primary,
  companyText,
  companyName,
  groupColors,
}: Props) => (
  <div
    className={`h-[420px]  w-full group flex items-center justify-center rounded-[20px] transition ease-in-out cursor-pointer duration-300 border-[2px] border-blue-50  bg-blue-50 shadow-white shadow-md ${groupColors}`}
  >
    <div className="mx-auto  w-full justify-between ">
      <div className="  flex justify-center">
        {" "}
        <div className={`w-36 h-36  rounded-full mb-3  ${primary}  `}></div>
      </div>
      <div className="text-center text-ellipsis">
        <h1 className="2xl:text-[32px] text-[28px]  text-talentBlue mb-2">
          {companyName}
        </h1>
        <h4 className="text-[16px] px-2 h-[50px]  mb-7 ">{companyText}</h4>
      </div>
      <div className="flex justify-center">
        <div
          className={`w-40 h-[50px] mt-7 rounded-full ${groupColor} bg-talentBlue-200`}
        >
          <h6 className="text-center text-white text-[19px] pt-2.5">Enter</h6>
        </div>
      </div>
    </div>
  </div>
);
