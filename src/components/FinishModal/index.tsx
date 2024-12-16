import React from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import Button from "../Button";
import { FinishState } from "../../types";

type FinishModalProps = {
  type: FinishState | null;
  isOpen: boolean;
  onRestart: () => void;
};

const FinishModal: React.FC<FinishModalProps> = ({
  isOpen,
  type,
  onRestart,
}) => {
  return (
    <Modal isOpen={isOpen} opacity={0.9} closeOnOverlay={false}>
      <ModalContainer className="flex flex-col items-center">
        {type && (
          <img
            width={200}
            src={
              (type as FinishState) === FinishState.WIN
                ? "images/end2.jpg"
                : "images/end1.jpg"
            }
            alt="nobita"
          />
        )}
        {type && (
          <span className="text-2xl my-4">
            {(type as FinishState) === FinishState.WIN
              ? "Chúc mừng bạn đã giúp Nobita tìm ra lối thoát thành công!!!"
              : "Bạn đã không thể giúp Nobita tìm ra lối thoát!!!"}
          </span>
        )}
        <Button className="w-full" onClick={onRestart}>
          Bắt đầu lại
        </Button>
      </ModalContainer>
    </Modal>
  );
};
export default FinishModal;
