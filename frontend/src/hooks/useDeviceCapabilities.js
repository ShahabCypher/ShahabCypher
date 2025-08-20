import { useState, useEffect } from "react";

export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState({
    isLowEnd: false,
    isMobile: false,
    supportsWebGL: false,
    devicePixelRatio: 1,
  });

  useEffect(() => {
    const checkCapabilities = () => {
      // Check if device is mobile
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      // Check WebGL support
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      const supportsWebGL = !!gl;

      // Check if device is low-end based on various factors
      const devicePixelRatio = window.devicePixelRatio || 1;
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      const deviceMemory = navigator.deviceMemory || 4; // GB

      // Heuristics for low-end device detection
      const isLowEnd =
        deviceMemory < 4 ||
        hardwareConcurrency < 4 ||
        (isMobile && devicePixelRatio < 2) ||
        !supportsWebGL;

      setCapabilities({
        isLowEnd,
        isMobile,
        supportsWebGL,
        devicePixelRatio,
      });
    };

    checkCapabilities();
  }, []);

  return capabilities;
};
