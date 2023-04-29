import { useEffect, useState } from "react";

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
