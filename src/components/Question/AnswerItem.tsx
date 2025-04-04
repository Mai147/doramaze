import React, { useEffect, useRef, useState } from "react";
import { Answer } from "../../types";
import { Utils } from "../../utils/Utils";
import AnswerConfirmModal from "./AnswerConfirmModal";
import { useAudio } from "../../context/AudioContext";

type AnswerItemProps = {
  answer: Answer;
  handleClose: (isCorrect: boolean) => void;
  onSelectAnswer: (answer: Answer) => void;
  disableSelect: boolean;
  isCorrect: boolean;
  isShowResult: boolean;
  setIsShowResult: (res: boolean) => void;
  isEndByCountDown: boolean;
};

const AnswerItem: React.FC<AnswerItemProps> = ({
  answer,
  handleClose,
  disableSelect,
  onSelectAnswer,
  isCorrect,
  isShowResult,
  setIsShowResult,
  isEndByCountDown,
}) => {
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const {
    state: { correctAudioRef, wrongAudioRef, currentAudio },
    action: { playAudio, pauseAllAudio },
  } = useAudio();
  const handleSelectAnswer = () => {
    if (!disableSelect) {
      setIsOpenConfirmModal(true);
    }
  };
  const playAnswerAudio = (isCorrect: boolean) => {
    const prevAudio = currentAudio;
    pauseAllAudio();
    playAudio(
      isCorrect ? correctAudioRef?.current : wrongAudioRef?.current,
      false
    );
    setTimeout(() => {
      playAudio(prevAudio);
    }, 2000);
  };
  useEffect(() => {
    const showResult = async () => {
      if (answerRef.current) {
        if (isCorrect) {
          if (isEndByCountDown) {
            // Wrong answer by countdown
            answerRef.current.style.background = "#ECA869";
            answerRef.current.style.color = "#fff";
            playAnswerAudio(false);
            await Utils.sleep(2000);
            handleClose(false);
            return;
          } else {
            answerRef.current.style.background = "#399918";
            answerRef.current.style.color = "#fff";
          }
        } else if (selected) {
          answerRef.current.style.background = "#FF7777";
          answerRef.current.style.color = "#fff";
        }
        // Selected answer audio
        if (selected) {
          playAnswerAudio(isCorrect);
        }
        await Utils.sleep(2000);
        if (selected) {
          // Process selected answer
          handleClose(isCorrect);
        }
      }
    };
    if (isShowResult) {
      showResult();
    }
  }, [isShowResult]);
  const getBackground = () => {
    const cursor = !disableSelect ? "cursor-pointer" : "";
    const hover = !disableSelect ? "hover:bg-[#e8e8b2]" : "";
    if (selected) return "bg-[#C6E7FF] font-bold";
    return `bg-[#FFFFCB] ${hover} ${cursor}`;
  };
  return (
    <div
      className={`border-4 border-[#9E7D20] py-3 pl-12 pr-4 ${getBackground()} relative transition-all duration-500`}
      style={{ boxShadow: "inset 1px 1px 2px 2px #8C946F" }}
      onClick={handleSelectAnswer}
      ref={answerRef}
    >
      <div className="w-10 h-10 text-2xl font-bold bg-[#996029] text-white flex justify-center items-center absolute top-0 left-0">
        {answer.key}
      </div>
      <span className="text-2xl font-bold">{answer.content}</span>
      <AnswerConfirmModal
        isOpen={isOpenConfirmModal}
        answer={answer}
        onClose={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpenConfirmModal(false);
        }}
        onConfirm={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpenConfirmModal(false);
          setSelected(true);
          onSelectAnswer(answer);
          setTimeout(async () => {
            setIsShowResult(true);
          }, 2000);
        }}
      />
    </div>
  );
};
export default AnswerItem;
