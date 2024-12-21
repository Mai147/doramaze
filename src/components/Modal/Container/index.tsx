import React from "react";
import ModalCloseButton from "../CloseButton";

type ModalContainerProps = {
    children?: React.ReactNode;
    useCloseButton?: boolean;
    closeButton?: React.ReactNode;
    onClose?: () => void;
    className?: string;
    style?: object;
};

const ModalContainer: React.FC<ModalContainerProps> = ({
    children,
    useCloseButton = false,
    closeButton,
    onClose,
    className = "",
    style,
}) => {
    return (
        <div
            className={`bg-white p-2 md:p-4 rounded-md ${className}`}
            style={style}
        >
            {closeButton ? (
                <>
                    <div
                        className="inline-flex items-center justify-center"
                        onClick={onClose}
                    >
                        {closeButton}
                    </div>
                </>
            ) : (
                useCloseButton && (
                    <div className="flex justify-end">
                        <ModalCloseButton onClose={onClose} />
                    </div>
                )
            )}
            {children}
        </div>
    );
};
export default ModalContainer;
