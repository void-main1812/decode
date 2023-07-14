import React, { useRef } from "react";

export const useDimensions = () => {
  const height = useRef(window.innerHeight);
  const width = useRef(window.innerWidth);

  return { height, width };
};
