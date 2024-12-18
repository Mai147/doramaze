import React, { useEffect, useRef, useState } from "react";
import { Answer } from "../../types";
import { Utils } from "../../utils/Utils";
import AnswerConfirmModal from "./AnswerConfirmModal";

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
  const handleSelectAnswer = () => {
    if (!disableSelect) {
      setIsOpenConfirmModal(true);
    }
  };
  useEffect(() => {
    const showResult = async () => {
      if (answerRef.current) {
        if (isCorrect) {
          if (isEndByCountDown) {
            answerRef.current.style.background = "#ECA869";
            answerRef.current.style.color = "#fff";
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
        await Utils.sleep(2000);
        if (selected) {
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
      className={`border-4 border-[#9E7D20] py-3 pl-8 pr-4 ${getBackground()} relative transition-all duration-500`}
      style={{ boxShadow: "inset 1px 1px 2px 2px #8C946F" }}
      onClick={handleSelectAnswer}
      ref={answerRef}
    >
      <div className="w-6 h-6 text-xs bg-[#996029] text-white flex justify-center items-center absolute top-0 left-0">
        {answer.key}
      </div>
      <span>{answer.content}</span>
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
