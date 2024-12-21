import React from "react";
import { IconType } from "react-icons";
import {
    START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
    START_MODAL_TUTORIAL_ARROW_CONTENT_SIZE,
    START_MODAL_TUTORIAL_ARROW_SIZE,
    START_MODAL_TUTORIAL_ARROW_TEXT_SIZE,
} from "../../configs/size";

type ArrowItemProps = {
    Icon: IconType;
};

const ArrowItem: React.FC<ArrowItemProps> = ({ Icon }) => {
    return (
        <div
            className="flex items-center justify-center border-gray-700 rounded-md relative overflow-hidden"
            style={{
                width: START_MODAL_TUTORIAL_ARROW_SIZE,
                height: START_MODAL_TUTORIAL_ARROW_SIZE,
            }}
        >
            <div
                className="absolute top-0 left-0 w-0 h-0 border-l-transparent border-r-transparent border-t-[#8E95C1]"
                style={{
                    borderLeftWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderRightWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderTopWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                }}
            ></div>
            <div
                className="absolute top-0 left-0 w-0 h-0 border-t-transparent border-b-transparent border-l-[#4D5594]"
                style={{
                    borderLeftWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderBottomWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderTopWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                }}
            ></div>
            <div
                className="absolute bottom-0 left-0 w-0 h-0 border-l-transparent border-r-transparent border-b-[#3C4375]"
                style={{
                    borderLeftWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderBottomWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderRightWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                }}
            ></div>
            <div
                className="absolute bottom-0 right-0 w-0 h-0 border-t-transparent border-b-transparent border-r-[#4D5594]"
                style={{
                    borderRightWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderBottomWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                    borderTopWidth: START_MODAL_TUTORIAL_ARROW_BORDER_SIZE,
                }}
            ></div>
            <div
                className="absolute bg-[#717AB1] flex items-center justify-center"
                style={{
                    width: START_MODAL_TUTORIAL_ARROW_CONTENT_SIZE,
                    height: START_MODAL_TUTORIAL_ARROW_CONTENT_SIZE,
                    top: `calc((${START_MODAL_TUTORIAL_ARROW_SIZE} - ${START_MODAL_TUTORIAL_ARROW_CONTENT_SIZE}) / 2)`,
                    left: `calc((${START_MODAL_TUTORIAL_ARROW_SIZE} - ${START_MODAL_TUTORIAL_ARROW_CONTENT_SIZE}) / 2)`,
                }}
            >
                <Icon
                    className="text-white"
                    style={{ fontSize: START_MODAL_TUTORIAL_ARROW_TEXT_SIZE }}
                />
            </div>
        </div>
    );
};
export default ArrowItem;
