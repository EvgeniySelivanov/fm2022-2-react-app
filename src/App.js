import React, { useState } from 'react';
import LearnHooks from './components/LearnHooks/index';


function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => {
        setIsVisible(!isVisible)
      }}>
        swich visible
      </button>
      
      {isVisible && <LearnHooks />}
    </>
  )
}
export default App;
