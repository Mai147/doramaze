import { useEffect, useState } from "react";
import { FinishState } from "../../types";
import StartModal from "../StartModal";
import Board from "../Board";
import { BOARD, END_POSITION } from "../../configs/board";
import FinishModal from "../FinishModal";
import { useAudio } from "../../context/AudioContext";
import Button from "../Button";
import InitModal from "../StartModal/InitModal";

function Home() {
  const [init, setInit] = useState(true);
  const [start, setStart] = useState<boolean | null>(null);
  const [openFinishModal, setOpenFinishModal] = useState(false);
  const [finishType, setFinishType] = useState<FinishState | null>(null);
  const {
    state: { tutorialAudioRef, backgroundAudioRef, winAudioRef, loseAudioRef },
    action: { playAudio, stopAllAudio },
  } = useAudio();
  useEffect(() => {
    stopAllAudio();
    if (start === false) {
      playAudio(tutorialAudioRef?.current);
    } else if (start) {
      playAudio(backgroundAudioRef?.current);
    }
  }, [start, tutorialAudioRef?.current, backgroundAudioRef?.current]);
  useEffect(() => {
    if (finishType !== null) {
      stopAllAudio();
      playAudio(
        finishType === FinishState.WIN
          ? winAudioRef?.current
          : loseAudioRef?.current,
        false
      );
    }
  }, [finishType]);
  return (
    <div
      className="relative flex flex-col justify-center h-[100vh] bg-cover"
      style={{ backgroundImage: "url('images/background2.png')" }}
    >
      {init && (
        <InitModal
          isOpen={init}
          handleInit={() => {
            setInit(false);
            setStart(false);
          }}
        />
      )}
      {!init && (
        <>
          {!start && (
            <StartModal
              handleStart={() => {
                setStart(true);
              }}
            />
          )}
          {start && (
            <>
              <div className="flex flex-col h-full">
                <div className="flex justify-center h-32 items-center">
                  <img width={400} src="images/logo.png" alt="logo" />
                </div>
                <Board
                  initBoard={BOARD}
                  endPosition={END_POSITION}
                  onFinish={(type) => {
                    setFinishType(type);
                    setOpenFinishModal(true);
                  }}
                />
              </div>
              <FinishModal
                type={finishType}
                isOpen={openFinishModal}
                onRestart={() => {
                  setFinishType(null);
                  setOpenFinishModal(false);
                  setStart(false);
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
