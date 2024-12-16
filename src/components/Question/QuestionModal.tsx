import React from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import QuestionSection from "./QuestionSection";
import AnswerSection from "./AnswerSection";
import { Answer, AnswerKeyValue } from "../../types";

type QuestionModalProps = {
  isOpen: boolean;
  onClose: (isCorrect: boolean) => void;
  question: string;
  answerList: Answer[];
  correctAnswer: AnswerKeyValue;
  selectedAnswer: Answer | null;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<Answer | null>>;
};

const QuestionModal: React.FC<QuestionModalProps> = ({
  isOpen,
  onClose,
  question,
  answerList,
  correctAnswer,
  selectedAnswer,
  setSelectedAnswer,
}) => {
  return (
    <Modal isOpen={isOpen} opacity={0.8} closeOnOverlay={false}>
      <ModalContainer className="min-w-[40vw] max-w-[60vw] max-h-[80vh] overflow-auto">
        <div className="flex justify-center mb-4">
          <img width={60} src="images/front3.gif" alt="nobita" />
        </div>
        <QuestionSection question={question} />
        <AnswerSection
          handleClose={onClose}
          answerList={answerList}
          correctAnswer={correctAnswer}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        />
      </ModalContainer>
    </Modal>
  );
};
export default QuestionModal;
