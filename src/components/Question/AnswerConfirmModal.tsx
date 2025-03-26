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
      <ModalContainer className="min-w-[550px] max-w-[700px] max-h-[90vh] flex flex-col items-center">
        <span className="text-center text-xl font-bold">
          Bạn chắc chắn với câu trả lời này?
        </span>
        <span className="mt-4 text-3xl text-center">{answer.content}</span>
        <img width={60} src="images/front3.gif" alt="nobita" className="my-4" />
        <div className="flex gap-2">
          <Button size="lg" className="w-36 h-12" onClick={onConfirm}>
            Yes
          </Button>
          <Button
            size="lg"
            className="w-36 h-12"
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
