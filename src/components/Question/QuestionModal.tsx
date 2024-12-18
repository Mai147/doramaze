import React, { useState } from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import QuestionSection from "./QuestionSection";
import AnswerSection from "./AnswerSection";
import { Answer } from "../../types";
import { Question, QuestionLevel } from "../../datas/question";
import Countdown from "./Countdown";
import { QuestionTime } from "../../configs/question";

type QuestionModalProps = {
  isOpen: boolean;
  onClose: (isCorrect: boolean) => void;
  question: Question;
  selectedAnswer: Answer | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Answer | null>>;
};

const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  onClose,
  question,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  const [isEndByCountDown, setIsEndByCountDown] = useState(false);
  const getCountDownTime = () => {
    return QuestionTime[question.level];
  };
  const handleEndCountDown = () => {
    setIsEndByCountDown(true);
  };
  return (
    <Modal isOpen={isOpen} opacity={0.8} closeOnOverlay={false}>
      <ModalContainer className="min-w-[40vw] max-w-[60vw] max-h-[80vh] overflow-auto relative">
        <div className="flex justify-center mb-4">
          <img width={60} src="images/front3.gif" alt="nobita" />
        </div>
        <div className="absolute right-4 top-4">
          <Countdown time={getCountDownTime()} onEnd={handleEndCountDown} />
        </div>
        <QuestionSection question={question.question} />
        {question.image && (
          <div className="flex justify-center mb-4">
            <img className="max-h-[30vh]" src={question.image} alt="question" />
          </div>
        )}
        <AnswerSection
          handleClose={onClose}
          answerList={question.answers}
          correctAnswer={question.correctAnswer}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          isEndByCountDown={isEndByCountDown}
        />
      </ModalContainer>
    </Modal>
  );
};
export default QuestionModal;
