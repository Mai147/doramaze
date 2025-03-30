import React, { useRef } from "react";
import { CHARACTER_RIGHT } from "../../configs/character";
// import { CELL_SIZE, CELL_SIZE_UNIT } from "../../configs/size";

export type CharacterPosition = {
  row: number;
  col: number;
};

type CharacterProps = {
  position: CharacterPosition;
  image?: string;
  size?: number;
};

const Character: React.FC<CharacterProps> = ({
  position,
  image = CHARACTER_RIGHT.src,
  size = CHARACTER_RIGHT.size,
}) => {
  const characterRef = useRef<HTMLDivElement>(null);
  const getCellSize = () => {
    const vh = window.innerHeight;
    const cellSize = (vh - 160) / 10;
    return cellSize;
  };
  const getTransformPosition = () => {
    const cellSize = getCellSize();
    const x = cellSize * position.col;
    const y = cellSize * position.row;
    return `translateX(${x}px) translateY(${y}px)`;
    // const x = CELL_SIZE * position.col;
    // const y = CELL_SIZE * position.row;
    // return `translateX(${x}${CELL_SIZE_UNIT}) translateY(${y}${CELL_SIZE_UNIT})`;
  };
  return (
    <div
      className="absolute top-0 left-0 flex items-center justify-center transition-all duration-1000"
      style={{
        transform: getTransformPosition(),
        // width: CELL_SIZE + CELL_SIZE_UNIT,
        // height: CELL_SIZE + CELL_SIZE_UNIT,
        width: `${getCellSize()}px`,
        height: `${getCellSize()}px`,
      }}
      ref={characterRef}
    >
      <img width={size} height={size} src={image} alt="nobita" />
    </div>
  );
};
export default Character;
