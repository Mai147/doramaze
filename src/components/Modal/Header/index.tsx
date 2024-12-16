import React from "react";

type ModalHeaderProps = {
    children?: React.ReactNode;
};

const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
    return <div className="text-sm font-bold">{children}</div>;
};
export default ModalHeader;
