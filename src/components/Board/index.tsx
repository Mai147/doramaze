import React, { useEffect, useState } from "react";
import Cell from "../Cell";
import Character, { CharacterPosition } from "../Character";
import { CellState, FinishState, MoveKey } from "../../types";
import { Utils } from "../../utils/Utils";
import {
  CHARACTER_BACK,
  CHARACTER_FRONT,
  CHARACTER_LEFT,
  CHARACTER_RIGHT,
} from "../../configs/character";
import { QuestionData } from "../../datas/question";
import { CELL_SIZE, CELL_SIZE_UNIT } from "../../configs/size";

type BoardProps = {
  initBoard: CellState[][];
  onFinish: (type: FinishState) => void;
  endPosition: { row: number; col: number };
};

const Board: React.FC<BoardProps> = ({ initBoard, onFinish, endPosition }) => {
  const [board, setBoard] = useState<CellState[][]>(initBoard);
  const [characterPos, setCharacterPos] = useState<CharacterPosition>({
    row: 0,
    col: 0,
  });
  const [characterImage, setCharacterImage] = useState<{
    src: string;
    size: number;
  }>({
    src: CHARACTER_RIGHT.src,
    size: CHARACTER_RIGHT.size,
  });
  const [moveFlg, setMoveFlg] = useState(false);
  const [finishFlg, setFinishFlg] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [selectedQuestionCord, setSelectedQuestionCord] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [prevKeyMove, setPrevKeyMove] = useState<MoveKey | null>(null);
  useEffect(() => {
    if (!finishFlg) {
      window.addEventListener("keyup", handleKeyUp);
    }
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [moveFlg, finishFlg, isQuestionOpen]);
  useEffect(() => {
    const existsPath = Utils.bfs(board, endPosition.row, endPosition.col);
    if (!existsPath) {
      handleFinish(FinishState.LOSE);
    }
  }, [board]);
  const checkMove = (nextRow: number, nextCol: number) => {
    return !(
      nextRow < 0 ||
      nextRow >= board.length ||
      nextCol < 0 ||
      nextCol >= board[0].length
    );
  };
  const setCharacterDirection = (keyMove: MoveKey) => {
    switch (keyMove) {
      case MoveKey.UP:
        setCharacterImage(CHARACTER_BACK);
        return;
      case MoveKey.DOWN:
        setCharacterImage(CHARACTER_FRONT);
        return;
      case MoveKey.LEFT:
        setCharacterImage(CHARACTER_LEFT);
        return;
      case MoveKey.RIGHT:
        setCharacterImage(CHARACTER_RIGHT);
        return;
    }
  };
  const handleFinish = (type: FinishState) => {
    setFinishFlg(true);
    onFinish(type);
  };
  const handleKeyUp = (e: KeyboardEvent) => {
    if (moveFlg || isQuestionOpen) return;
    if (
      e.key === MoveKey.UP ||
      e.key === MoveKey.DOWN ||
      e.key === MoveKey.RIGHT ||
      e.key === MoveKey.LEFT
    ) {
      setMoveFlg(true);
      handleMove(e.key);
      setTimeout(() => {
        setMoveFlg(false);
      }, 1200);
    }
  };
  const getNewCord = (keyMove: MoveKey) => {
    let rowDiff = 0;
    let colDiff = 0;
    if (keyMove === MoveKey.RIGHT) {
      colDiff = 1;
    } else if (keyMove === MoveKey.LEFT) {
      colDiff = -1;
    } else if (keyMove === MoveKey.UP) {
      rowDiff = -1;
    } else if (keyMove === MoveKey.DOWN) {
      rowDiff = 1;
    }
    const nextRow = characterPos.row + rowDiff;
    const nextCol = characterPos.col + colDiff;
    return {
      nextRow,
      nextCol,
      rowDiff,
      colDiff,
    };
  };
  const handleMove = (keyMove: MoveKey) => {
    const { nextRow, nextCol, colDiff, rowDiff } = getNewCord(keyMove);
    if (rowDiff !== 0 || colDiff !== 0) {
      if (!checkMove(nextRow, nextCol)) return;
      if (board[nextRow][nextCol] === CellState.BLOCKED) return;
      setCharacterDirection(keyMove);
      if (board[nextRow][nextCol] === CellState.QUESTION) {
        setIsQuestionOpen(true);
        setSelectedQuestionCord({ row: nextRow, col: nextCol });
        setPrevKeyMove(keyMove);
        return;
      }
      setCharacterPos((prev) => ({
        row: prev.row + rowDiff,
        col: prev.col + colDiff,
      }));
      if (nextRow === endPosition.row && nextCol === endPosition.col) {
        handleFinish(FinishState.WIN);
      }
    }
  };
  const handleForceMove = (keyMove: MoveKey) => {
    const { nextCol, nextRow, colDiff, rowDiff } = getNewCord(keyMove);
    setCharacterPos((prev) => ({
      row: prev.row + rowDiff,
      col: prev.col + colDiff,
    }));
    if (nextRow === endPosition.row && nextCol === endPosition.col) {
      handleFinish(FinishState.WIN);
    }
  };
  const handleCloseQuestion = (isCorrect: boolean) => {
    if (selectedQuestionCord) {
      setBoard((prev) => {
        const newBoard = JSON.parse(JSON.stringify(prev));
        newBoard[selectedQuestionCord.row][selectedQuestionCord.col] = isCorrect
          ? CellState.EMPTY
          : CellState.BLOCKED;
        return newBoard;
      });
      if (prevKeyMove && isCorrect) {
        handleForceMove(prevKeyMove);
      }
    }
    setIsQuestionOpen(false);
    setSelectedQuestionCord(null);
    setPrevKeyMove(null);
  };
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="relative">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="flex">
            {row.map((cell, colIdx) => (
              <Cell
                key={`${rowIdx}${colIdx}`}
                cellState={cell}
                isQuestionOpen={
                  selectedQuestionCord?.row === rowIdx &&
                  selectedQuestionCord?.col === colIdx
                }
                isEndPosition={
                  rowIdx === endPosition.row && colIdx === endPosition.col
                }
                handleCloseQuestion={handleCloseQuestion}
                question={QuestionData.find(
                  (question) =>
                    question.position.row === rowIdx &&
                    question.position.col === colIdx
                )}
              />
            ))}
          </div>
        ))}
        <Character
          position={characterPos}
          image={characterImage.src}
          size={characterImage.size}
        />
      </div>
      <div
        className={`absolute border-8 border-[#99682F] rounded-sm`}
        style={{
          width: `calc(${board[0].length * CELL_SIZE}${CELL_SIZE_UNIT} + 16px)`,
          height: `calc(${board.length * CELL_SIZE}${CELL_SIZE_UNIT} + 16px)`,
          left: `calc(((100vw - ${
            board[0].length * CELL_SIZE
          }${CELL_SIZE_UNIT}) / 2) - 8px)`,
          top: `-8px`,
        }}
      ></div>
    </div>
  );
};
export default Board;
