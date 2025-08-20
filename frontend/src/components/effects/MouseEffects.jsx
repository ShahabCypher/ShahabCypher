import { useDeviceCapabilities } from "hooks/useDeviceCapabilities";
import MouseTrail from "./MouseTrail";
import RippleEffect from "./RippleEffect";

const MouseEffects = () => {
  const { isMobile, isLowEnd } = useDeviceCapabilities();

  // Skip all effects on mobile for performance and UX
  if (isMobile) return null;

  return (
    <>
      {/* Particle trail - only on high-end devices */}
      {!isLowEnd && <MouseTrail />}

      {/* Click ripples */}
      <RippleEffect />
    </>
  );
};

export default MouseEffects;
