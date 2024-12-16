import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  closeOnOverlay?: boolean;
  children?: React.ReactNode;
  opacity?: number;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  closeOnOverlay = true,
  children,
  opacity = 0.2,
}) => {
  return isOpen
    ? ReactDOM.createPortal(
        <div
          className={`fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center`}
        >
          <div
            className="absolute bottom-0 top-0 left-0 right-0 bg-black"
            onClick={(e) => {
              if (closeOnOverlay && onClose) {
                onClose(e);
              }
            }}
            style={{ opacity }}
          ></div>
          <div className="z-[999]">{children}</div>
        </div>,
        document.querySelector("body")!
      )
    : null;
};
export default Modal;
