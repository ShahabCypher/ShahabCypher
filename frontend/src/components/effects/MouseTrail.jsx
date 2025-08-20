import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "hooks/useTheme";
import { useDeviceCapabilities } from "hooks/useDeviceCapabilities";

const MouseTrail = () => {
  const [particles, setParticles] = useState([]);
  const { theme } = useTheme();
  const { isLowEnd, isMobile } = useDeviceCapabilities();
  const isDark = theme === "dark";
  const containerRef = useRef();
  const animationIdRef = useRef();
  const particleIdRef = useRef(0);
  const lastMouseMoveRef = useRef(0);

  // Adjust settings based on device capabilities
  const maxParticles = isLowEnd ? 8 : 20;
  const throttleDelay = isLowEnd ? 50 : 16; // ms

  // Mouse move handler with throttling
  const handleMouseMove = useCallback(
    (e) => {
      const now = Date.now();
      if (now - lastMouseMoveRef.current < throttleDelay) return;
      lastMouseMoveRef.current = now;

      const newX = e.clientX;
      const newY = e.clientY;

      // Create new particle
      const newParticle = {
        id: particleIdRef.current++,
        x: newX,
        y: newY,
        size: Math.random() * (isLowEnd ? 4 : 6) + (isLowEnd ? 3 : 4),
        opacity: 1,
        life: 1,
        velocityX: (Math.random() - 0.5) * (isLowEnd ? 1 : 2),
        velocityY: (Math.random() - 0.5) * (isLowEnd ? 1 : 2),
        color:
          Math.random() > 0.5
            ? isDark
              ? "#00d9ff"
              : "#0366d6" // cyber-blue / professional-blue
            : isDark
            ? "#34e89e"
            : "#28a745", // matrix-green / success-green
        createdAt: Date.now(),
      };

      setParticles((prev) => [...prev.slice(-maxParticles + 1), newParticle]);
    },
    [isDark, isLowEnd, maxParticles, throttleDelay]
  );

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            life: particle.life - (isLowEnd ? 0.03 : 0.02),
            opacity: particle.life,
            size: particle.size * (isLowEnd ? 0.96 : 0.98),
          }))
          .filter((particle) => particle.life > 0 && particle.size > 0.5)
      );

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [isLowEnd]);

  // Mouse event listeners
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: "screen" }}
    >
      {/* Trail particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, ${particle.color}, transparent)`,
            opacity: particle.opacity,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            transform: "translate3d(0, 0, 0)", // Hardware acceleration
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
