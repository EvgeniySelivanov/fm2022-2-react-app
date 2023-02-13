import React, { useState, useEffect } from 'react';

const LearnHooks = (props) => {
  const [count, setCount] = useState(0);
 

  useEffect(() => {
    const handlerClick = () => {
      setCount((prevCount) => prevCount + 1);
      //setCount(count + 1);
    }
    //add effect (component didMount if [] clear array!!!! second parametr )
    document.body.addEventListener('click', handlerClick);
    return () => {
      //clean effect  (component Will-Unmont if [] clear array!!!! second parametr)
      document.body.removeEventListener('click', handlerClick);
    };//eslint-disable-next-line
  }, []);



  return (
    <div>
      <p>count: {count}</p>
    </div>
  );
}

export default LearnHooks;
