import { useState, useEffect } from "react";

export default function useScreen() {
  const SCREEN_REF = 1728;
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const sizeWidth = (width: number) => {
    return Math.trunc((width * windowSize[0]) / SCREEN_REF);
  };
  const sizeHeight = (width: number) => {
    return Math.trunc((width * windowSize[1]) / SCREEN_REF);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return {
    width: windowSize[0],
    height: windowSize[1],
    sw: sizeWidth,
    sh: sizeHeight,
  };
}
