import React from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";

type ExplainationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  explaination: string;
};

const ExplainationModal: React.FC<ExplainationModalProps> = ({
  isOpen,
  onClose,
  explaination,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer
        className="flex flex-col items-center max-w-[70vw] text-2xl"
        style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <img width={80} src="images/end.png" alt="doremon" />
        <p className="whitespace-break-spaces">{explaination}</p>
      </ModalContainer>
    </Modal>
  );
};
export default ExplainationModal;
