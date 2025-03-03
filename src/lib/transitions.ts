
import { useState, useEffect } from 'react';

export function useTransition(isLoaded: boolean, delay: number) {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isLoaded, delay]);
  
  return visible;
}

export const staggered = (index: number, baseDelay = 50) => {
  return index * baseDelay;
};
