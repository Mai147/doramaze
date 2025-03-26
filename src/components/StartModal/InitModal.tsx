import React from "react";
import Button from "../Button";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import { START_MODAL_LOGO_SIZE } from "../../configs/size";

type InitModalProps = {
  handleInit: () => void;
  isOpen: boolean;
};

const InitModal: React.FC<InitModalProps> = ({ handleInit, isOpen }) => {
  return (
    <Modal closeOnOverlay={false} isOpen={isOpen} opacity={0.8}>
      <ModalContainer className="flex flex-col items-center justify-center">
        <img width={START_MODAL_LOGO_SIZE} src="images/logo.png" alt="logo" />
        <span className="pb-4 text-3xl">Nhấn vào nút dưới để bắt đầu</span>
        <Button className="w-full" size="lg" onClick={handleInit}>
          Bắt đầu
        </Button>
      </ModalContainer>
    </Modal>
  );
};
export default InitModal;
