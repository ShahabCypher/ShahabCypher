import { useState, useEffect, useRef } from "react";
import { useTheme } from "hooks/useTheme";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cursorRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const cursorColor = isDark ? "#00d9ff" : "#0366d6";
  const glowColor = isDark
    ? "rgba(0, 217, 255, 0.4)"
    : "rgba(3, 102, 214, 0.4)";

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Main cursor dot */}
      <div
        className={`w-3 h-3 rounded-full transition-all duration-150 ease-out ${
          isPressed ? "scale-75" : "scale-100"
        }`}
        style={{
          backgroundColor: cursorColor,
          boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
        }}
      />
    </div>
  );
};

export default CustomCursor;
