import { useState, useLayoutEffect } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    // Прибираємо слухача події при знищенні компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
};
