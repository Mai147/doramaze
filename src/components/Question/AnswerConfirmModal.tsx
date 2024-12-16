import React from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import Button from "../Button";
import { Answer } from "../../types";

type AnswerConfirmModalProps = {
  isOpen: boolean;
  onClose: (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
  ) => void;
  onConfirm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  answer: Answer;
};

const AnswerConfirmModal: React.FC<AnswerConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  answer,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} opacity={0.8}>
      <ModalContainer className="w-[450px] flex flex-col items-center">
        <span className="text-center text-xl font-bold">
          Bạn chắc chắn với câu trả lời này?
        </span>
        <span className="mt-4 text-lg">{answer.content}</span>
        <img width={60} src="images/front3.gif" alt="nobita" className="my-4" />
        <div className="flex gap-2">
          <Button size="sm" className="w-32 h-9" onClick={onConfirm}>
            Yes
          </Button>
          <Button
            size="sm"
            className="w-32 h-9"
            variant="secondary"
            onClick={onClose}
          >
            No
          </Button>
        </div>
      </ModalContainer>
    </Modal>
  );
};
export default AnswerConfirmModal;
