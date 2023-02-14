import React, { useState } from 'react';
import FuncStopWatch from './components/FuncStopWatch/index';


function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => {
        setIsVisible(!isVisible)
      }}>
        swich visible
      </button>

      {isVisible && <FuncStopWatch />}
      

    </>
  )
}
export default App;
