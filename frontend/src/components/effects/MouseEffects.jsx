import { useDeviceCapabilities } from "hooks/useDeviceCapabilities";
import MouseTrail from "./MouseTrail";
import RippleEffect from "./RippleEffect";
import CustomCursor from "./CustomCursor";

const MouseEffects = () => {
  const { isMobile, isLowEnd } = useDeviceCapabilities();

  // Skip all effects on mobile for performance and UX
  if (isMobile) return null;

  return (
    <div className="z-60">
      {/* Custom cursor dot */}
      <CustomCursor />

      {/* Particle trail - only on high-end devices */}
      {!isLowEnd && <MouseTrail />}

      {/* Click ripples */}
      <RippleEffect />
    </div>
  );
};

export default MouseEffects;
