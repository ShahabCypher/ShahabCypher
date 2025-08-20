import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = ({ count = 2000, mousePosition }) => {
  const points = useRef();
  const particles = useRef();

  // Generate random particles in 3D space
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Random positions in a cube
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 10;

      // Cyber-themed colors (blue to cyan to green)
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        // Cyber blue
        colors[i3] = 0;
        colors[i3 + 1] = 0.85;
        colors[i3 + 2] = 1;
      } else if (colorChoice < 0.7) {
        // Matrix green
        colors[i3] = 0.2;
        colors[i3 + 1] = 0.9;
        colors[i3 + 2] = 0.6;
      } else {
        // Light cyan
        colors[i3] = 0.6;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 1;
      }
    }

    return { positions, colors };
  }, [count]);

  // Animation loop
  useFrame((state) => {
    if (!points.current) return;

    const time = state.clock.getElapsedTime();
    const positions = points.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Gentle floating motion
      positions[i3 + 1] += Math.sin(time + i * 0.01) * 0.002;
      positions[i3] += Math.cos(time + i * 0.005) * 0.001;

      // Mouse interaction effect
      if (mousePosition) {
        const dx = mousePosition.x * 10 - positions[i3];
        const dy = mousePosition.y * 10 - positions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 3) {
          const force = (3 - distance) / 3;
          positions[i3] += dx * force * 0.01;
          positions[i3 + 1] += dy * force * 0.01;
        }
      }

      // Wrap particles around the scene
      if (positions[i3 + 1] > 10) positions[i3 + 1] = -10;
      if (positions[i3 + 1] < -10) positions[i3 + 1] = 10;
      if (positions[i3] > 10) positions[i3] = -10;
      if (positions[i3] < -10) positions[i3] = 10;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particlePositions.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default ParticleField;
