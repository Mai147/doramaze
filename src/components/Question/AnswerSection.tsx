import React, { useEffect, useState } from "react";
import { Answer, AnswerKeyValue } from "../../types";
import AnswerItem from "./AnswerItem";

type AnswerSectionProps = {
  handleClose: (isCorrect: boolean) => void;
  answerList: Answer[];
  correctAnswer: AnswerKeyValue;
  selectedAnswer: Answer | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Answer | null>>;
  isEndByCountDown: boolean;
};

const AnswerSection: React.FC<AnswerSectionProps> = ({
  handleClose,
  answerList,
  correctAnswer,
  selectedAnswer,
  setSelectedAnswer,
  isEndByCountDown,
}) => {
  useEffect(() => {
    if (isEndByCountDown && !selectedAnswer) {
      setDisabledSelect(true);
      setIsShowResult(true);
    }
  }, [isEndByCountDown, selectedAnswer]);
  const [isShowResult, setIsShowResult] = useState(false);
  const [disabledSelect, setDisabledSelect] = useState(false);
  return (
    <div className="grid grid-cols-2 gap-2">
      {answerList.map((answer) => (
        <AnswerItem
          key={answer.value}
          answer={answer}
          handleClose={handleClose}
          onSelectAnswer={setSelectedAnswer}
          disableSelect={!!selectedAnswer || disabledSelect}
          isCorrect={answer.value === correctAnswer}
          isShowResult={isShowResult}
          setIsShowResult={setIsShowResult}
          isEndByCountDown={isEndByCountDown && !selectedAnswer}
        />
      ))}
    </div>
  );
};
export default AnswerSection;
