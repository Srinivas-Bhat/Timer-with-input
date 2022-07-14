import React, { useRef, useState } from "react";

function Timer() {
  const [text, setText] = useState();
  const [count, setCount] = useState(text);
  const timerRef = useRef(null);
  const handleSubmit = () => {
    setCount(text);
  };
  const handleStart = () => {
    if (timerRef.current !== null) return;
    timerRef.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleSkip = () => {
    setCount(count + 15);
  };
  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div>
      <h1>Timer : {count}</h1>
      <input
        type="number"
        value={text}
        onChange={(e) => setText(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleSkip}>Skip</button>
    </div>
  );
}

export default Timer;
