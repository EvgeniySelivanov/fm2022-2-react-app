import { useState, useEffect } from 'react';
const useClicker = (value=0) => {
  const [count, setCount] = useState(value);
  useEffect(() => {
    // console.log('add effect');
    const handlerClick = () => {
      setCount((prevCount) => prevCount+1);
    }
    //add effect (component didMount if [] clear array!!!! second parametr )
    window.addEventListener('click', handlerClick);
    return () => {
      // console.log('remove effect');
      //clean effect  (component Will-Unmount if [] clear array!!!! second parametr)
      window.removeEventListener('click', handlerClick);
    };//eslint-disable-next-line
  }, []);

  return  count ;
 
}

export default useClicker;
