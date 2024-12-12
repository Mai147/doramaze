import React from "react";

type CellProps = {
  row: number;
  col: number;
  isVisited: boolean;
};

const Cell: React.FC<CellProps> = ({ row, col, isVisited }) => {
  return (
    <div
      className={`w-12 h-12 border border-gray-600 flex items-center justify-center text-center ${
        isVisited ? "bg-red-400" : ""
      }`}
    >
      <img
        className={`${row == 0 && col == 0 ? "activate" : ""}`}
        src="images/right2.gif"
        alt=""
      />
    </div>
  );
};
export default Cell;
