import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>();
  const intervalId = useRef<number>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      intervalId.current = id;
      return () => clearInterval(id);
    }
  }, [delay]);
  return intervalId.current;
}

export default useInterval;
