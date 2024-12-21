import React, { useState } from "react";
import { Answer, CellState } from "../../types";
import QuestionModal from "../Question/QuestionModal";
import { Question } from "../../datas/question";
import { CELL_SIZE, CELL_SIZE_UNIT } from "../../configs/size";

type CellProps = {
  cellState: CellState;
  isQuestionOpen?: boolean;
  isEndPosition?: boolean;
  handleCloseQuestion: (isCorrect: boolean) => void;
  question?: Question;
};

const Cell: React.FC<CellProps> = ({
  cellState,
  isQuestionOpen,
  handleCloseQuestion,
  isEndPosition = false,
  question,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

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
      className={`flex items-center justify-center ${getCellColor()}`}
      style={{
        width: CELL_SIZE + CELL_SIZE_UNIT,
        height: CELL_SIZE + CELL_SIZE_UNIT,
      }}
    >
      {cellState === CellState.QUESTION && (
        <img src="images/question.png" alt="question" />
      )}
      {cellState === CellState.BLOCKED && (
        <img src="images/blocked.png" alt="question" />
      )}
      {isEndPosition && <img width={30} src="images/end.png" alt="doraemon" />}
      {cellState === CellState.QUESTION && question && (
        <QuestionModal
          isOpen={isQuestionOpen ?? false}
          onClose={handleCloseQuestion}
          question={question}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      )}
    </div>
  );
};
export default Cell;
