import React, { useState, useEffect } from 'react';

const LearnHooks = (props) => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handlerStep = ({ target: { value } }) => {
    setStep(Number(value));
  };


  useEffect(() => {
    console.log('add effect');
    const handlerClick = () => {
      setCount((prevCount) => prevCount + step);
      //setCount(count + 1);
    }
    //add effect (component didMount if [] clear array!!!! second parametr )
    document.body.addEventListener('click', handlerClick);
    return () => {
      console.log('remove effect');
      //clean effect  (component Will-Unmont if [] clear array!!!! second parametr)
      document.body.removeEventListener('click', handlerClick);
    };//eslint-disable-next-line
  }, [step]);



  return (
    <div>
      <p>count: {count}</p>
      <input type="number" value={step} onChange={handlerStep} />
    </div>
  );
}

export default LearnHooks;
