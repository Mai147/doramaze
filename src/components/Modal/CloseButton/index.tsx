import React from "react";
import { IoMdClose } from "react-icons/io";

type ModalCloseButtonProps = {
    onClose?: () => void;
};

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({ onClose }) => {
    return (
        <div
            className="inline-flex items-center justify-center p-1 cursor-pointer"
            onClick={onClose}
        >
            <IoMdClose size={20} className="text-lg md:text-xl" />
        </div>
    );
};
export default ModalCloseButton;
