import React from "react";

type Props = {
  groupColor?: string;
  groupColors?: string;
};

export const WideCard = ({ groupColor, groupColors }: Props) => (
  <div className="w-full flex ">
    <div
      className={`h-70   w-full group  flex p-10 rounded-[20px] transition ease-in-out cursor-pointer duration-300  border-blue-50  bg-blue-50 shadow-white shadow-md ${groupColors}`}
    >
      <div className=" w-[100%] ">
        <div className={`w-16 h-16 rounded ${groupColor} mb-8`}></div>
        <div className="flex  xs:flex-row flex-col w-[100%] md:space-x-8 justify-between">
          <div className="mb-3 flex md:w-[70%] w-[100%] lg:w-[60%]   flex-col">
            <h1 className="text-white text-[20px] mb-1">Bonus Code</h1>
            <p className="text-blackAlpha-800 text-[16px]  xl:w-full ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo velit eum vitae.
            </p>
          </div>
          <div className="xs:w-[20%] md:w-[20%] w-[100%] lg:w-[30%] ">
            <div className=" w-full ">
              <div className={`w-full  h-[50px]  rounded-full ${groupColor}`}>
                <h6 className="text-center text-white text-[19px] pt-2.5">
                  Enter
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
