export enum MoveKey {
  UP = "ArrowUp",
  DOWN = "ArrowDown",
  LEFT = "ArrowLeft",
  RIGHT = "ArrowRight",
}

export enum CellState {
  EMPTY,
  BLOCKED,
  QUESTION,
}

export enum AnswerKeyValue {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
}

export enum FinishState {
  WIN = "win",
  LOSE = "lose",
}

export type Answer = {
  content: string | number;
  value: AnswerKeyValue;
  key: string;
};
