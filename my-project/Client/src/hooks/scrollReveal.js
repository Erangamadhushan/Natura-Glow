// src/hooks/useScrollReveal.js
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (options = {}) => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2000,
      delay: 100,
      reset: false,
    });

    sr.reveal(`.scroll-left`, {
      origin: 'left',
      interval: 100,
    });

    sr.reveal(`.scroll-right`, {
        origin: 'right',
        interval: 100,
        once:true,
    });

    sr.reveal(`.scroll-up`, {
        origin: 'bottom',
        interval: 100,
    });
    sr.reveal(`.scroll-items-200`) ,{
      origin: 'bottom',
      dealy: 300
    }

    sr.reveal(`.scroll-down`, {
      origin: 'top',
      interval: 100,

    })
    return () => sr.destroy();
  }, [options]);
};

export default useScrollReveal;