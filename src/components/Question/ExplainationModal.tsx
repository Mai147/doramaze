import React from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import useImagePreloader from "../../hooks/useImagePreloader";
import Spinner from "../Spinner";

type ExplainationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  explaination: {
    image?: string;
    content: string;
  };
};

const ExplainationModal: React.FC<ExplainationModalProps> = ({
  isOpen,
  onClose,
  explaination,
}) => {
  const { imagesPreloaded } = useImagePreloader(
    explaination.image ? [explaination.image] : []
  );
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContainer
        className="flex flex-col items-center max-w-[90vw] max-h-[90vh] text-3xl"
        style={{
          paddingLeft: "3rem",
          paddingRight: "3rem",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <img width={80} src="images/end.png" alt="doremon" />
        {!imagesPreloaded ? (
          <div className="flex justify-center items-center py-8">
            <Spinner size={16} />
          </div>
        ) : (
          <>
            <p className="whitespace-break-spaces mt-2 font-bold text-center">
              {explaination.content}
            </p>
            {explaination.image && (
              <div className="flex justify-center mt-4">
                <img
                  className="max-h-[30vh]"
                  src={explaination.image}
                  alt="explaination"
                />
              </div>
            )}
          </>
        )}
      </ModalContainer>
    </Modal>
  );
};
export default ExplainationModal;
