import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Wireframe } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({
  position,
  geometry,
  rotationSpeed,
  scale = 1,
  color,
}) => {
  const mesh = useRef();

  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * rotationSpeed.x;
    mesh.current.rotation.y = time * rotationSpeed.y;
    mesh.current.rotation.z = time * rotationSpeed.z;

    // Gentle floating motion
    mesh.current.position.y = position[1] + Math.sin(time + position[0]) * 0.5;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <primitive object={geometry} />
      <meshBasicMaterial color={color} transparent opacity={0.3} wireframe />
    </mesh>
  );
};

const GeometricShapes = () => {
  const shapes = [
    {
      position: [-8, 2, -5],
      geometry: new THREE.OctahedronGeometry(1),
      rotationSpeed: { x: 0.01, y: 0.02, z: 0 },
      scale: 1.5,
      color: "#00d9ff", // cyber-blue
    },
    {
      position: [6, -3, -3],
      geometry: new THREE.IcosahedronGeometry(1),
      rotationSpeed: { x: 0.02, y: 0.01, z: 0.01 },
      scale: 1,
      color: "#34e89e", // matrix-green
    },
    {
      position: [-4, -2, -8],
      geometry: new THREE.TetrahedronGeometry(1),
      rotationSpeed: { x: 0.015, y: 0.025, z: 0.005 },
      scale: 1.2,
      color: "#00d9ff",
    },
    {
      position: [8, 4, -6],
      geometry: new THREE.DodecahedronGeometry(1),
      rotationSpeed: { x: 0.008, y: 0.015, z: 0.012 },
      scale: 0.8,
      color: "#34e89e",
    },
    {
      position: [0, 5, -4],
      geometry: new THREE.OctahedronGeometry(1),
      rotationSpeed: { x: 0.012, y: 0.008, z: 0.02 },
      scale: 1.3,
      color: "#00ffff", // light cyan
    },
    {
      position: [-6, 1, -2],
      geometry: new THREE.IcosahedronGeometry(1),
      rotationSpeed: { x: 0.01, y: 0.03, z: 0.005 },
      scale: 0.9,
      color: "#34e89e",
    },
  ];

  return (
    <group>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          position={shape.position}
          geometry={shape.geometry}
          rotationSpeed={shape.rotationSpeed}
          scale={shape.scale}
          color={shape.color}
        />
      ))}
    </group>
  );
};

export default GeometricShapes;
