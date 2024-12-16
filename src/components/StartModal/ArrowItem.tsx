import React from "react";
import { IconType } from "react-icons";

type ArrowItemProps = {
  Icon: IconType;
};

const ArrowItem: React.FC<ArrowItemProps> = ({ Icon }) => {
  return (
    <div className="w-14 h-14 flex items-center justify-center border-gray-700 rounded-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-0 h-0 border-l-[1.75rem] border-l-transparent border-r-[1.75rem] border-r-transparent border-t-[1.75rem] border-t-[#8E95C1]"></div>
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[1.75rem] border-t-transparent border-b-[1.75rem] border-b-transparent border-l-[1.75rem] border-l-[#4D5594]"></div>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[1.75rem] border-l-transparent border-r-[1.75rem] border-r-transparent border-b-[1.75rem] border-b-[#3C4375]"></div>
      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[1.75rem] border-t-transparent border-b-[1.75rem] border-b-transparent border-r-[1.75rem] border-r-[#4D5594]"></div>
      <div className="absolute top-2 left-2 bg-[#717AB1] w-10 h-10 flex items-center justify-center">
        <Icon className="text-white text-2xl" />
      </div>
    </div>
  );
};
export default ArrowItem;
