import React, { useState, useEffect } from 'react';

const WindowSizeHook = (props) => {
  const [size, setSize] = useState(
    {
      h: window.innerHeight,
      w: window.innerWidth
    });

  useEffect(() => {
    const hadlerSize = () => {
      setSize(({prevSize}) => ({ h: window.innerHeight, w: window.innerWidth }));

    };
    window.addEventListener('resize', hadlerSize);
    return () => {
      window.removeEventListener('resize', hadlerSize);
    }
  }, []);
  return (
    <p>
      height:{size.h} <br /> width: {size.w}
    </p>
  );
}
export default WindowSizeHook;
