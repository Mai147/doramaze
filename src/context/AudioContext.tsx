import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type AudioContextState = {
  tutorialAudioRef: React.RefObject<HTMLAudioElement> | null;
  backgroundAudioRef: React.RefObject<HTMLAudioElement> | null;
  correctAudioRef: React.RefObject<HTMLAudioElement> | null;
  wrongAudioRef: React.RefObject<HTMLAudioElement> | null;
  winAudioRef: React.RefObject<HTMLAudioElement> | null;
  loseAudioRef: React.RefObject<HTMLAudioElement> | null;
  currentAudio: HTMLAudioElement | null;
  backgroundMuted: boolean;
};

type AudioContextAction = {
  playAudio: (audio?: HTMLAudioElement | null, loop?: boolean) => void;
  stopAudio: (audio?: HTMLAudioElement | null) => void;
  pauseAudio: (audio?: HTMLAudioElement | null) => void;
  pauseAllAudio: () => void;
  stopAllAudio: () => void;
  setBackgroundMuted: React.Dispatch<React.SetStateAction<boolean>>;
};

type AudioContextType = {
  state: AudioContextState;
  action: AudioContextAction;
};

const defaultAudioContext: AudioContextType = {
  state: {
    tutorialAudioRef: null,
    backgroundAudioRef: null,
    correctAudioRef: null,
    wrongAudioRef: null,
    winAudioRef: null,
    loseAudioRef: null,
    currentAudio: null,
    backgroundMuted: false,
  },
  action: {
    playAudio: () => {},
    stopAudio: () => {},
    pauseAudio: () => {},
    pauseAllAudio: () => {},
    stopAllAudio: () => {},
    setBackgroundMuted: () => {},
  },
};

const AudioContext = createContext<AudioContextType>(defaultAudioContext);

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const tutorialAudioRef = useRef<HTMLAudioElement>(null);
  const backgroundAudioRef = useRef<HTMLAudioElement>(null);
  const correctAudioRef = useRef<HTMLAudioElement>(null);
  const wrongAudioRef = useRef<HTMLAudioElement>(null);
  const winAudioRef = useRef<HTMLAudioElement>(null);
  const loseAudioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    const handleBackgroundMute = (e: KeyboardEvent) => {
      if (e.key === "m") {
        setBackgroundMuted((prev) => !prev);
      }
    };
    window.addEventListener("keyup", handleBackgroundMute);
    return () => {
      window.removeEventListener("keyup", handleBackgroundMute);
    };
  }, []);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(
    null
  );
  const [backgroundMuted, setBackgroundMuted] = useState(false);
  const playAudio = (audio?: HTMLAudioElement | null, loop: boolean = true) => {
    if (audio) {
      setCurrentAudio(audio);
      audio.loop = loop;
      audio
        .play()
        .then(() => {})
        .catch((err) => console.log(err));
    }
  };
  const stopAudio = (audio?: HTMLAudioElement | null) => {
    if (audio) {
      audio.loop = false;
      audio.pause();
      audio.currentTime = 0;
    }
  };
  const stopAllAudio = () => {
    stopAudio(tutorialAudioRef.current);
    stopAudio(backgroundAudioRef.current);
    stopAudio(correctAudioRef.current);
    stopAudio(wrongAudioRef.current);
    stopAudio(winAudioRef.current);
    stopAudio(loseAudioRef.current);
  };
  const pauseAudio = (audio?: HTMLAudioElement | null) => {
    if (audio) {
      audio.loop = false;
      audio.pause();
    }
  };
  const pauseAllAudio = () => {
    pauseAudio(tutorialAudioRef.current);
    pauseAudio(backgroundAudioRef.current);
    pauseAudio(correctAudioRef.current);
    pauseAudio(wrongAudioRef.current);
    pauseAudio(winAudioRef.current);
    pauseAudio(loseAudioRef.current);
  };
  return (
    <AudioContext.Provider
      value={{
        state: {
          tutorialAudioRef,
          backgroundAudioRef,
          correctAudioRef,
          wrongAudioRef,
          winAudioRef,
          loseAudioRef,
          currentAudio,
          backgroundMuted,
        },
        action: {
          playAudio,
          stopAudio,
          pauseAudio,
          pauseAllAudio,
          stopAllAudio,
          setBackgroundMuted,
        },
      }}
    >
      <audio
        ref={tutorialAudioRef}
        src="audio/tutorial_out.mp3"
        autoPlay={true}
      ></audio>
      <audio
        ref={backgroundAudioRef}
        src="audio/background_out.mp3"
        muted={backgroundMuted}
      ></audio>
      <audio ref={correctAudioRef} src="audio/correct.mp3"></audio>
      <audio ref={wrongAudioRef} src="audio/wrong.mp3"></audio>
      <audio ref={winAudioRef} src="audio/win.mp3"></audio>
      <audio ref={loseAudioRef} src="audio/lose.mp3"></audio>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
