import React, { useState } from "react";
import { Answer, CellState } from "../../types";
import QuestionModal from "../Question/QuestionModal";
import { Question } from "../../datas/question";
// import { CELL_SIZE, CELL_SIZE_UNIT } from "../../configs/size";
import ExplainationModal from "../Question/ExplainationModal";

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
  const [isOpenExplaination, setIsOpenExplaination] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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
  const handleAfterSelectAnswer = (isCorrect: boolean) => {
    if (!question?.explaination) {
      handleCloseQuestion(isCorrect);
    } else {
      setIsOpenExplaination(true);
      setIsCorrect(isCorrect);
    }
  };
  const handleCloseExplaination = () => {
    setIsOpenExplaination(false);
    handleCloseQuestion(isCorrect ?? false);
  };
  return (
    <div
      className={`flex items-center justify-center ${getCellColor()}`}
      style={{
        // width: CELL_SIZE + CELL_SIZE_UNIT,
        // height: CELL_SIZE + CELL_SIZE_UNIT,
        width: `calc((100vh - 10rem) / 10)`,
        height: "calc((100vh - 10rem) / 10)",
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
        <>
          <QuestionModal
            isOpen={isQuestionOpen ?? false}
            onClose={handleAfterSelectAnswer}
            question={question}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          {question.explaination && (
            <ExplainationModal
              isOpen={isOpenExplaination}
              onClose={handleCloseExplaination}
              explaination={question.explaination}
            />
          )}
        </>
      )}
    </div>
  );
};
export default Cell;
