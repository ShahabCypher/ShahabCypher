import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import { useTheme } from "hooks/useTheme";
import { useDeviceCapabilities } from "hooks/useDeviceCapabilities";
import ParticleField from "./ParticleField";
import GeometricShapes from "./GeometricShapes";
import CyberGrid from "./CyberGrid";

const Scene = ({ mousePosition, isDark, capabilities }) => {
  // Adjust particle count and complexity based on device capabilities
  const particleCount = capabilities.isLowEnd
    ? 500
    : capabilities.isMobile
    ? 1000
    : 1500;
  const showGeometry = !capabilities.isLowEnd;
  const showGrid = !capabilities.isLowEnd || !capabilities.isMobile;

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Background stars for depth - reduced on low-end devices */}
      <Stars
        radius={100}
        depth={50}
        count={capabilities.isLowEnd ? 500 : 1000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Main 3D elements */}
      <ParticleField count={particleCount} mousePosition={mousePosition} />

      {/* Only show complex geometry on capable devices */}
      {showGeometry && <GeometricShapes />}

      {/* Only show grid on non-mobile or high-end devices */}
      {showGrid && <CyberGrid mousePosition={mousePosition} />}

      {/* Camera controls - subtle movement only */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </>
  );
};

// Fallback component for devices that don't support WebGL
const StaticBackground = ({ isDark }) => (
  <div
    className="fixed inset-0 pointer-events-none z-0"
    style={{
      background: isDark
        ? "radial-gradient(circle at center, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 1) 100%)"
        : "radial-gradient(circle at center, rgba(246, 248, 250, 0.9) 0%, rgba(246, 248, 250, 1) 100%)",
    }}
  >
    {/* Simple CSS animation as fallback */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        background: isDark
          ? "linear-gradient(45deg, transparent 30%, rgba(0, 217, 255, 0.1) 50%, transparent 70%)"
          : "linear-gradient(45deg, transparent 30%, rgba(3, 102, 214, 0.1) 50%, transparent 70%)",
        animation: "pulse 4s ease-in-out infinite",
      }}
    />
  </div>
);

const ThreeBackground = ({ className = "" }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef();
  const { theme } = useTheme();
  const capabilities = useDeviceCapabilities();
  const isDark = theme === "dark";

  // Track mouse movement for interactive effects (only on capable devices)
  useEffect(() => {
    if (capabilities.isLowEnd) return; // Skip mouse tracking on low-end devices

    const handleMouseMove = (event) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, [capabilities.isLowEnd]);

  // Fallback for devices without WebGL support
  if (!capabilities.supportsWebGL) {
    return <StaticBackground isDark={isDark} />;
  }

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: isDark
          ? "radial-gradient(circle at center, rgba(13, 17, 23, 0.9) 0%, rgba(13, 17, 23, 1) 100%)"
          : "radial-gradient(circle at center, rgba(246, 248, 250, 0.9) 0%, rgba(246, 248, 250, 1) 100%)",
      }}
    >
      <Suspense fallback={<StaticBackground isDark={isDark} />}>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
          dpr={Math.min(capabilities.devicePixelRatio, 2)}
          performance={{
            min: capabilities.isLowEnd ? 0.3 : 0.5,
            max: capabilities.isLowEnd ? 0.7 : 1,
          }}
          frameloop={capabilities.isLowEnd ? "demand" : "always"}
        >
          <Scene
            mousePosition={mousePosition}
            isDark={isDark}
            capabilities={capabilities}
          />
        </Canvas>
      </Suspense>

      {/* Overlay gradient for better text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(13, 17, 23, 0.1) 0%, rgba(13, 17, 23, 0.3) 100%)"
            : "linear-gradient(to bottom, rgba(246, 248, 250, 0.1) 0%, rgba(246, 248, 250, 0.3) 100%)",
        }}
      />
    </div>
  );
};

export default ThreeBackground;
