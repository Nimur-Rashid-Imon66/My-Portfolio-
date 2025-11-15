import { useState, useEffect } from 'react';

/**
 * Custom hook to track window dimensions
 * @returns {Object} Object containing window width and height
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * Custom hook to detect if user is on mobile device
 * @returns {boolean} True if on mobile device
 */
export const useIsMobile = () => {
  const { width } = useWindowSize();
  return width < 768;
};

/**
 * Custom hook to track scroll position
 * @returns {number} Current scroll Y position
 */
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
};

/**
 * Custom hook to detect if element is in viewport
 * @param {Object} ref - React ref object
 * @param {Object} options - Intersection Observer options
 * @returns {boolean} True if element is in viewport
 */
export const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};
