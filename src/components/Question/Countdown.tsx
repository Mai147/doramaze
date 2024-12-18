import React, { useState } from "react";
import useInterval from "../../hooks/useInterval";

type CountdownProps = {
  time: number;
  onEnd: () => void;
};

const Countdown: React.FC<CountdownProps> = ({ time, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(time);
  const id = useInterval(() => {
    if (timeLeft === 0) {
      clearInterval(id);
      onEnd();
      return;
    }
    setTimeLeft((prev) => prev - 1);
  }, 1000);
  return (
    <div className="w-16 h-16 text-2xl font-bold text-white bg-[#75A47F] border-4 border-[#638977] rounded-full flex items-center justify-center">
      {timeLeft}
    </div>
  );
};
export default Countdown;
