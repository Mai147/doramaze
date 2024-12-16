import React, { useState } from "react";
import { Answer, AnswerKeyValue, CellState } from "../../types";
import QuestionModal from "../Question/QuestionModal";

type CellProps = {
  row: number;
  col: number;
  cellState: CellState;
  isQuestionOpen?: boolean;
  isEndPosition?: boolean;
  handleCloseQuestion: (isCorrect: boolean) => void;
};

const Cell: React.FC<CellProps> = ({
  row,
  col,
  cellState,
  isQuestionOpen,
  handleCloseQuestion,
  isEndPosition = false,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const answerList: Answer[] = [
    {
      value: AnswerKeyValue.A,
      content: "日本",
      key: "A",
    },
    {
      value: AnswerKeyValue.B,
      content: "にほ",
      key: "B",
    },
    {
      value: AnswerKeyValue.C,
      content: "ベトナム",
      key: "C",
    },
    {
      value: AnswerKeyValue.D,
      content: "にっぽ",
      key: "D",
    },
  ];
  const question = "Nhật Bản viết bằng tiếng Nhật là gì?";
  const getCellColor = () => {
    switch (cellState) {
      case CellState.EMPTY:
        return "bg-[#7EDA3B] border-2 border-[#74BF35]";
      case CellState.BLOCKED:
        return "bg-[#916352] border-2 border-[#C7874E]";
      case CellState.QUESTION:
        return "bg-[#858EA5] border-2 border-[#999999]";
    }
  };
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center ${getCellColor()}`}
    >
      {cellState === CellState.QUESTION && (
        <img src="images/question.png" alt="question" />
      )}
      {cellState === CellState.BLOCKED && (
        <img src="images/blocked.png" alt="question" />
      )}
      {isEndPosition && <img width={30} src="images/end.png" alt="doraemon" />}
      {cellState === CellState.QUESTION && (
        <QuestionModal
          isOpen={isQuestionOpen ?? false}
          onClose={handleCloseQuestion}
          question={question}
          answerList={answerList}
          correctAnswer={AnswerKeyValue.A}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      )}
    </div>
  );
};
export default Cell;
