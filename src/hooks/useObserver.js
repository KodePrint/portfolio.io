import {useRef, useState, useEffect} from 'react';

export const useObserver = ({distance = '-400px', externalRef, once = true} = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setIsVisible(true);
      } else { 
        setIsVisible(false);
      }
    }

    // Utilizando el polify del observer
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        observer = new window.IntersectionObserver(onChange, {
          // root: null,
          rootMargin: distance,
        });
        element && observer.observe(element);
      })

    return () => observer && observer.disconnect();
  }, [isVisible, fromRef, distance, externalRef, once]);

  return {isVisible, fromRef}
}