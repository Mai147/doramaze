import React, { useState } from "react";
import { Answer, AnswerKeyValue } from "../../types";
import AnswerItem from "./AnswerItem";

type AnswerSectionProps = {
  handleClose: (isCorrect: boolean) => void;
  answerList: Answer[];
  correctAnswer: AnswerKeyValue;
  selectedAnswer: Answer | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Answer | null>>;
};

const AnswerSection: React.FC<AnswerSectionProps> = ({
  handleClose,
  answerList,
  correctAnswer,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const [isShowResult, setIsShowResult] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-2">
      {answerList.map((answer) => (
        <AnswerItem
          key={answer.value}
          answer={answer}
          handleClose={handleClose}
          onSelectAnswer={setSelectedAnswer}
          disableSelect={!!selectedAnswer}
          isCorrect={answer.value === correctAnswer}
          isShowResult={isShowResult}
          setIsShowResult={setIsShowResult}
        />
      ))}
    </div>
  );
};
export default AnswerSection;
