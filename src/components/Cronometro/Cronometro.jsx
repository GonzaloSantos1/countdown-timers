import React, {useState, useEffect} from 'react';

const Cronometro = () => {
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className='Cronometro'>
      <h2>{timer}</h2>
      <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTimerOn(true)}>Resume</button>
      <button onClick={() => setTimer(0) & setTimerOn(false)}>Reset</button>
    </div>
  );
};

export default Cronometro;
