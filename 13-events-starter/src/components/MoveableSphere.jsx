import React, { useState } from "react";
import { useCursor } from "@react-three/drei";

export const MoveableSphere = (props) => {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  useCursor(hovered);
  let color = hovered ? "pink" : "white";
  if (selected) {
    color = "hotpink";
    console.log("selected");
  }

  return (
    <mesh
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(!selected);
      }}
      onPointerMissed={() => setSelected(false)}>
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
