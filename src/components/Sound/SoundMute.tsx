import React from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useAudio } from "../../context/AudioContext";

type SoundMuteProps = {};

const SoundMute: React.FC<SoundMuteProps> = () => {
  const {
    state: { backgroundMuted },
    action: { setBackgroundMuted },
  } = useAudio();
  return (
    <div
      onClick={() => {
        setBackgroundMuted((prev) => !prev);
      }}
      className="cursor-pointer"
    >
      {!backgroundMuted ? (
        <HiSpeakerWave size={40} color="white" />
      ) : (
        <HiSpeakerXMark size={40} color="white" />
      )}
    </div>
  );
};
export default SoundMute;
