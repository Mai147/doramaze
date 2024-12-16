import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { FinishState } from "./types";
import FinishModal from "./components/FinishModal";
import { BOARD, END_POSITION } from "./configs/board";
import StartModal from "./components/StartModal";

function App() {
  const [start, setStart] = useState(false);
  const [openFinishModal, setOpenFinishModal] = useState(false);
  const [finishType, setFinishType] = useState<FinishState | null>(null);
  return (
    <div
      className="relative flex flex-col justify-center h-[100vh] bg-cover"
      style={{ backgroundImage: "url('images/background2.png')" }}
    >
      {!start && (
        <StartModal
          handleStart={() => {
            setStart(true);
          }}
        />
      )}
      {start && (
        <>
          <div className="flex justify-center h-40 items-center absolute top-0 left-1/2 -translate-x-1/2">
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
    </div>
  );
}

export default App;
