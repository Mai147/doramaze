import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import QuestionSection from "./QuestionSection";
import AnswerSection from "./AnswerSection";
import { Answer } from "../../types";
import { Question } from "../../datas/question";
import Countdown from "./Countdown";
import { QuestionTime } from "../../configs/question";
import useImagePreloader from "../../hooks/useImagePreloader";
import Spinner from "../Spinner";
import useVideoPreloader from "../../hooks/useVideoPreloader";
import { useAudio } from "../../context/AudioContext";
import { isApplyCountDown } from "../../configs/board";

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
  const handleEndCountDown = () => {
    setIsEndByCountDown(true);
  };
  const { imagesPreloaded } = useImagePreloader(
    question.image ? [question.image] : []
  );
  const { videosPreloaded } = useVideoPreloader(
    question.video ? [question.video] : []
  );
  const {
    action: { pauseAllAudio },
  } = useAudio();
  useEffect(() => {
    if (question.video && isOpen) {
      pauseAllAudio();
    }
  }, [question.video, isOpen, pauseAllAudio]);
  return (
    <Modal isOpen={isOpen} opacity={0.8} closeOnOverlay={false}>
      <ModalContainer className="min-w-[40vw] max-w-[80vw] max-h-[90vh] overflow-auto relative">
        <div className="flex justify-center mb-4">
          <img width={60} src="images/front3.gif" alt="nobita" />
        </div>
        {!imagesPreloaded || !videosPreloaded ? (
          <div className="flex justify-center items-center py-8">
            <Spinner size={16} />
          </div>
        ) : (
          <>
            {isApplyCountDown && (
              <div className="absolute right-4 top-4">
                <Countdown
                  time={question.time ?? QuestionTime[question.level]}
                  onEnd={handleEndCountDown}
                />
              </div>
            )}
            <QuestionSection question={question.question} />
            {question.image && (
              <div className="flex justify-center mb-4">
                <img
                  className="max-h-[30vh]"
                  src={question.image}
                  alt="question"
                />
              </div>
            )}
            {question.video && (
              <div className="flex justify-center mb-4">
                <video
                  className="max-h-[30vh]"
                  src={question.video}
                  autoPlay
                  controls
                ></video>
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
          </>
        )}
      </ModalContainer>
    </Modal>
  );
};
export default QuestionModal;
