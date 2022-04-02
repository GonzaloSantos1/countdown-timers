import './_clock.scss';
import React, {useState, useEffect} from 'react';

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div classname='clock'>
      <h2>{clockState}</h2>
    </div>
  );
};

export default Clock;
