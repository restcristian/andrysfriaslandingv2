import { useEffect, useState, useRef } from "react";

export const useMyScroll = () => {
  const [direction, setDirection] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      const newDirection = window.scrollY > window.pageYOffset ? "down" : "up";
      setDirection(newDirection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    direction,
  };
};

export function usePrevious<T>(value:T) {
    // The ref object is a generic container whose current property is mutable ...
    // ... and can hold any value, similar to an instance property on a class
    const ref = useRef<T>();
    // Store current value in ref
    useEffect(() => {
      ref.current = value;
    }, [value]); // Only re-run if value changes
    // Return previous value (happens before update in useEffect above)
    return ref.current;
  }
