import { CellState } from "../types";

export const BOARD = [
  [
    CellState.EMPTY,
    CellState.QUESTION,
    CellState.QUESTION,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.BLOCKED,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
  [
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.EMPTY,
    CellState.BLOCKED,
    CellState.EMPTY,
    CellState.EMPTY,
  ],
];

export const START_POSITION = {
  row: 0,
  col: 0,
};

export const END_POSITION = {
  row: 7,
  col: 8,
};
