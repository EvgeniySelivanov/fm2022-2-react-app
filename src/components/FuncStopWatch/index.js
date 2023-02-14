import React, { useState, useEffect } from 'react';
import { format ,addSeconds} from 'date-fns';
import styles from './FuncStopWatch.module.scss';

const FuncStopWatch = () => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  // const [time, setTime] = useState(0);

  const [isRuning, setIsRunig] = useState(false);

  const handlerBtn = () => {
    setIsRunig(!isRuning);
  };

  const handlerReset=()=>{
    setIsRunig(false);
    setTime(new Date(0, 0, 0, 0, 0, 0, 0));
  }


  useEffect(() => {
    if (isRuning) {
      const intervalId = setInterval(() => {
         setTime((time) => addSeconds(time,1)); },
          1000);
      return () => {
        clearInterval(intervalId);
      }
    }
    //eslint-disable-next-line
  }, [isRuning]);

  return (
    <article className={styles.container}>
      <h2>{format(time,'HH:mm:ss')}</h2>
      <button className={styles.container__btn} onClick={handlerBtn}>{isRuning ? "stop" : "start"}</button>
      <button className={styles.container__btn} onClick={handlerReset}>reset</button>

    </article>
  );
}

export default FuncStopWatch;
