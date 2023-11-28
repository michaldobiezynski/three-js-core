import { RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const AnimatedBox = ({ boxPositions, ...props }) => {
  const box = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const x = Math.sin(time) * 2;
    const y = Math.cos(time) * 2;
    const z = Math.sin(time) * 2;

    box.current.position.x = x;
    box.current.position.y = y;
    box.current.position.z = z;
  });

  return (
    <group {...props}>
      <RoundedBox
        scale={0.5}
        position-x={boxPositions[0].x}
        position-y={boxPositions[0].y}
        position-z={boxPositions[0].z}
        ref={box}>
        <meshStandardMaterial color="white" />
      </RoundedBox>
    </group>
  );
};
