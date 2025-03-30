import { CellState } from "../types";

export const BOARD = [
  [
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
  ],
  [
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
  ],
  [
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.EMPTY,
  ],
  [
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.QUESTION,
    CellState.QUESTION,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.QUESTION,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
  ],
  [
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
  ],
  [
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.QUESTION,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.BLOCKED,
    CellState.QUESTION,
    CellState.QUESTION,
  ],
  [
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
  ],
];

export const START_POSITION = {
  row: 0,
  col: 0,
};

export const END_POSITION = {
  row: 9,
  col: 9,
};

const getQuestionPosition = () => {
  const positions = [];
  for (let i = 0; i < BOARD.length; i++) {
    for (let j = 0; j < BOARD[i].length; j++) {
      if (BOARD[i][j] === CellState.QUESTION) {
        // Lưu vị trí của phần tử có giá trị bằng 2
        positions.push({ row: i, col: j });
      }
    }
  }
  return positions;
};

export const QuestionPosition = getQuestionPosition();

export const isApplyCountDown = false;
