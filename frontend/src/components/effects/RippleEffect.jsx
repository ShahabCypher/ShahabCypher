import { useState, useEffect, useCallback } from "react";
import { useTheme } from "hooks/useTheme";

const RippleEffect = () => {
  const [ripples, setRipples] = useState([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const rippleIdRef = useState(() => ({ current: 0 }))[0];

  const createRipple = useCallback(
    (e) => {
      const newRipple = {
        id: rippleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        size: 0,
        opacity: 0.8,
        timestamp: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);
    },
    [rippleIdRef]
  );

  // Animation loop for ripples
  useEffect(() => {
    const animateRipples = () => {
      setRipples((prev) =>
        prev
          .map((ripple) => {
            const age = Date.now() - ripple.timestamp;
            const progress = age / 1000; // 1 second duration

            return {
              ...ripple,
              size: progress * 300, // Max size 300px
              opacity: Math.max(0, 0.8 - progress),
            };
          })
          .filter((ripple) => ripple.opacity > 0)
      );

      requestAnimationFrame(animateRipples);
    };

    const animationId = requestAnimationFrame(animateRipples);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Click event listener
  useEffect(() => {
    const handleClick = (e) => {
      // Only create ripples on left click and not on interactive elements
      if (
        e.button === 0 &&
        !e.target.closest("button, a, input, textarea, select")
      ) {
        createRipple(e);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [createRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            borderColor: isDark ? "#00d9ff" : "#0366d6",
            opacity: ripple.opacity,
            boxShadow: `0 0 ${ripple.size / 10}px ${
              isDark ? "#00d9ff" : "#0366d6"
            }`,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;
