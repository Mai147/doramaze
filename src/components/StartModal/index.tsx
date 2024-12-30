import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import ModalContainer from "../Modal/Container";
import { useTypewriter } from "react-simple-typewriter";
import {
  getWelcomeTextConfig,
  TUTORIAL_TEXTS,
  WELCOME_TEXTS,
  WelcomeStep,
} from "../../configs/welcome";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
  IoIosArrowUp,
} from "react-icons/io";
import ArrowItem from "./ArrowItem";
import {
  START_MODAL_CHARACTER_SIZE,
  START_MODAL_CONTENT_TEXT_LINE_HEIHGT,
  START_MODAL_CONTENT_TEXT_SIZE,
  START_MODAL_HEIGHT,
  START_MODAL_LOGO_SIZE,
  START_MODAL_SKIP_TEXT_SIZE,
  START_MODAL_TEXT_MAX_WIDTH,
  START_MODAL_TUTORIAL_ARROW_GAP,
  START_MODAL_TUTORIAL_IMAGE1_SIZE,
  START_MODAL_TUTORIAL_IMAGE2_SIZE,
  START_MODAL_TUTORIAL_IMAGE3_SIZE,
  START_MODAL_WIDTH,
} from "../../configs/size";

type StartModalProps = {
  handleStart: () => void;
};

const StartModal: React.FC<StartModalProps> = ({ handleStart }) => {
  const [welcomeText, welcomeHelper] = useTypewriter(
    getWelcomeTextConfig(WELCOME_TEXTS)
  );
  const [step, setStep] = useState<WelcomeStep>(WelcomeStep.WELCOME);
  useEffect(() => {
    if (welcomeHelper.isDone) {
      setTimeout(() => {
        setStep(WelcomeStep.TUTORIAL1);
      }, 1000);
    }
  }, [welcomeHelper.isDone]);
  useEffect(() => {
    const handleNextStep = (e: KeyboardEvent) => {
      if (e.key === " ") {
        switch (step) {
          case WelcomeStep.WELCOME:
            return;
          case WelcomeStep.TUTORIAL1:
            setStep(WelcomeStep.TUTORIAL2);
            return;
          case WelcomeStep.TUTORIAL2:
            setStep(WelcomeStep.TUTORIAL3);
            return;
          case WelcomeStep.TUTORIAL3:
            setStep(WelcomeStep.TUTORIAL4);
            return;
          case WelcomeStep.TUTORIAL4:
            handleStart();
            return;
        }
      }
    };
    window.addEventListener("keyup", handleNextStep);
    return () => {
      window.removeEventListener("keyup", handleNextStep);
    };
  }, [step, handleStart]);
  return (
    <Modal isOpen={true} closeOnOverlay={false} opacity={0.9}>
      <ModalContainer
        className="flex flex-col items-center text-xl"
        style={{
          width: START_MODAL_WIDTH,
          height: START_MODAL_HEIGHT,
        }}
      >
        <img width={START_MODAL_LOGO_SIZE} src="images/logo.png" alt="logo" />
        <img
          width={START_MODAL_CHARACTER_SIZE}
          src="images/front3.gif"
          alt="nobita"
        />
        <div
          className="flex-1 flex flex-col items-center text-center text-gray-700"
          style={{
            maxWidth: START_MODAL_TEXT_MAX_WIDTH,
            fontSize: START_MODAL_CONTENT_TEXT_SIZE,
            lineHeight: START_MODAL_CONTENT_TEXT_LINE_HEIHGT,
          }}
        >
          {step === WelcomeStep.WELCOME && (
            <div className="flex-1 flex flex-col justify-center">
              <span>{welcomeText}</span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL1 && (
            <div className="flex-1 flex flex-col items-center">
              <div className="flex-1 flex flex-col justify-evenly">
                <span>{TUTORIAL_TEXTS[0]}</span>
                <div
                  className="flex justify-center"
                  style={{
                    gap: START_MODAL_TUTORIAL_ARROW_GAP,
                  }}
                >
                  <ArrowItem Icon={IoIosArrowUp} />
                  <ArrowItem Icon={IoIosArrowDown} />
                  <ArrowItem Icon={IoIosArrowForward} />
                  <ArrowItem Icon={IoIosArrowBack} />
                </div>
              </div>
              <span
                className="text-gray-500"
                style={{ fontSize: START_MODAL_SKIP_TEXT_SIZE }}
              >
                Nhấn phím Space để tiếp tục...
              </span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL2 && (
            <div className="flex-1 flex flex-col items-center">
              <div className="flex-1 flex flex-col justify-evenly">
                <span>{TUTORIAL_TEXTS[1]}</span>
                <div className="flex justify-center">
                  <img
                    width={START_MODAL_TUTORIAL_IMAGE1_SIZE}
                    src="images/blocked.png"
                    alt="obstacle"
                  />
                </div>
              </div>
              <span
                className="text-gray-500"
                style={{ fontSize: START_MODAL_SKIP_TEXT_SIZE }}
              >
                Nhấn phím Space để tiếp tục...
              </span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL3 && (
            <div className="flex-1 flex flex-col items-center">
              <div className="flex-1 flex flex-col justify-evenly">
                <span>{TUTORIAL_TEXTS[2]}</span>
                <div className="flex justify-center">
                  <img
                    width={START_MODAL_TUTORIAL_IMAGE2_SIZE}
                    src="images/question.png"
                    alt="obstacle"
                  />
                </div>
              </div>
              <span
                className="text-gray-500"
                style={{ fontSize: START_MODAL_SKIP_TEXT_SIZE }}
              >
                Nhấn phím Space để tiếp tục...
              </span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL4 && (
            <div className="flex-1 flex flex-col items-center">
              <div className="flex-1 flex flex-col justify-evenly">
                <span>{TUTORIAL_TEXTS[3]}</span>
                <div className="flex justify-center my-2">
                  <img
                    width={START_MODAL_TUTORIAL_IMAGE3_SIZE}
                    src="images/end.png"
                    alt="obstacle"
                  />
                </div>
              </div>
              <span
                className="text-gray-500"
                style={{ fontSize: START_MODAL_SKIP_TEXT_SIZE }}
              >
                Nhấn phím Space để bắt đầu...
              </span>
            </div>
          )}
        </div>
      </ModalContainer>
    </Modal>
  );
};
export default StartModal;
