import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CyberGrid = ({ mousePosition }) => {
  const gridRef = useRef();
  const materialRef = useRef();

  // Create grid geometry
  const { geometry, positions } = useMemo(() => {
    const gridSize = 20;
    const divisions = 40;
    const step = gridSize / divisions;
    const positions = [];

    // Horizontal lines
    for (let i = 0; i <= divisions; i++) {
      const y = -gridSize / 2 + i * step;
      positions.push(-gridSize / 2, y, 0);
      positions.push(gridSize / 2, y, 0);
    }

    // Vertical lines
    for (let i = 0; i <= divisions; i++) {
      const x = -gridSize / 2 + i * step;
      positions.push(x, -gridSize / 2, 0);
      positions.push(x, gridSize / 2, 0);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    return { geometry, positions };
  }, []);

  useFrame((state) => {
    if (!materialRef.current) return;

    const time = state.clock.getElapsedTime();

    // Pulsing effect
    const pulseIntensity = 0.3 + Math.sin(time * 0.5) * 0.2;
    materialRef.current.opacity = pulseIntensity;

    // Color shifting
    const hue = (time * 0.1) % 1;
    const color = new THREE.Color().setHSL(hue * 0.3 + 0.5, 1, 0.5);
    materialRef.current.color = color;
  });

  return (
    <group position={[0, 0, -10]} rotation={[-Math.PI / 3, 0, 0]}>
      <line ref={gridRef} geometry={geometry}>
        <lineBasicMaterial
          ref={materialRef}
          color="#00d9ff"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </line>
    </group>
  );
};

export default CyberGrid;
