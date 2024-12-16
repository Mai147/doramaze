import React, { useRef } from "react";
import { CHARACTER_RIGHT } from "../../configs/character";

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
  const getTransformPosition = () => {
    const x = 3 * position.col;
    const y = 3 * position.row;
    return `translateX(${x}rem) translateY(${y}rem)`;
  };
  return (
    <div
      className="absolute top-0 left-0 character flex items-center justify-center w-12 h-12"
      style={{ transform: getTransformPosition() }}
      ref={characterRef}
    >
      <img width={size} height={size} src={image} alt="nobita" />
    </div>
  );
};
export default Character;
