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
  }, [step]);
  return (
    <Modal isOpen={true} closeOnOverlay={false} opacity={0.9}>
      <ModalContainer className="flex flex-col items-center text-xl w-[550px]">
        <img width={400} src="images/logo.png" alt="logo" />
        <img width={80} src="images/front3.gif" alt="nobita" className="my-4" />
        <div className="text-center max-w-[500px]">
          {step === WelcomeStep.WELCOME && <span>{welcomeText}</span>}
          {step === WelcomeStep.TUTORIAL1 && (
            <div>
              <span>{TUTORIAL_TEXTS[0]}</span>
              <div className="flex justify-center gap-2 mt-4 mb-2">
                <ArrowItem Icon={IoIosArrowUp} />
                <ArrowItem Icon={IoIosArrowDown} />
                <ArrowItem Icon={IoIosArrowForward} />
                <ArrowItem Icon={IoIosArrowBack} />
              </div>
              <span className="text-gray-500 text-sm">
                Nhấn phím Space để tiếp tục...
              </span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL2 && (
            <div>
              <span>{TUTORIAL_TEXTS[1]}</span>
              <div className="flex justify-center">
                <img width={100} src="images/blocked.png" alt="obstacle" />
              </div>
              <span className="text-gray-500 text-sm">
                Nhấn phím Space để tiếp tục...
              </span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL3 && (
            <div>
              <span>{TUTORIAL_TEXTS[2]}</span>
              <div className="flex justify-center">
                <img width={100} src="images/question.png" alt="obstacle" />
              </div>
              <span className="text-gray-500 text-sm">
                Nhấn phím Space để tiếp tục...
              </span>
            </div>
          )}
          {step === WelcomeStep.TUTORIAL4 && (
            <div>
              <span>{TUTORIAL_TEXTS[3]}</span>
              <div className="flex justify-center my-2">
                <img width={60} src="images/end.png" alt="obstacle" />
              </div>
              <span className="text-gray-500 text-sm">
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
