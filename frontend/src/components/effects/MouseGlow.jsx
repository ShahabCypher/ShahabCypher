import { useState, useEffect } from "react";
import { useTheme } from "hooks/useTheme";
import { useDeviceCapabilities } from "hooks/useDeviceCapabilities";

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();
  const { isMobile, isLowEnd } = useDeviceCapabilities();
  const isDark = theme === "dark";

  useEffect(() => {
    if (isMobile || isLowEnd) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest(
        'button, a, input, textarea, select, [role="button"]'
      );
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, isLowEnd]);

  // Skip rendering on mobile or low-end devices for performance
  if (isMobile || isLowEnd) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-25">
      {/* Main glow effect */}
      <div
        className="absolute rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200,
          background: `radial-gradient(circle, ${
            isHovering
              ? isDark
                ? "rgba(52, 232, 158, 0.15)"
                : "rgba(40, 167, 69, 0.15)" // matrix-green / success-green
              : isDark
              ? "rgba(0, 217, 255, 0.1)"
              : "rgba(3, 102, 214, 0.1)" // cyber-blue / professional-blue
          } 0%, transparent 70%)`,
          transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.3 : 1})`,
          filter: `blur(${isHovering ? "40px" : "30px"})`,
        }}
      />

      {/* Inner glow for more intensity */}
      <div
        className="absolute rounded-full transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: 100,
          height: 100,
          background: `radial-gradient(circle, ${
            isHovering
              ? isDark
                ? "rgba(52, 232, 158, 0.2)"
                : "rgba(40, 167, 69, 0.2)"
              : isDark
              ? "rgba(0, 217, 255, 0.15)"
              : "rgba(3, 102, 214, 0.15)"
          } 0%, transparent 60%)`,
          transform: `translate3d(0, 0, 0) scale(${isHovering ? 1.2 : 1})`,
          filter: `blur(${isHovering ? "15px" : "10px"})`,
        }}
      />
    </div>
  );
};

export default MouseGlow;
