import { motion } from "framer-motion-3d";
import { useEffect, useState } from "react";

export const Teeth = () => {
  const [variant, setVarianrt] = useState("closed");

  useEffect(() => {
    const interval = setInterval(() => {
      setVarianrt(variant === "closed" ? "open" : "closed");
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.group animate={variant}>
      <motion.mesh
        position-x={-1}
        position-y={-1}
        variants={{
          closed: {
            y: -1,
            rotateY: 0,
          },
          open: {
            y: 0,
            rotateY: Math.PI / 2,
            scale: 1.1,
          },
        }}
        transition={{
          repeat: Infinity,
          repeatDelay: 1,
        }}>
        <coneGeometry args={[0.5, 1, 4]} />
        <motion.meshStandardMaterial
          color="#ffffff"
          variants={{
            closed: {
              color: "#7564a4",
            },
            open: {
              color: "#ffffff",
            },
          }}
        />
      </motion.mesh>
      <motion.mesh position-x={0} position-y={1} rotation-x={Math.PI}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </motion.mesh>
      <motion.mesh position-x={1} position-y={-1}>
        <coneGeometry args={[0.5, 1, 4]} />
        <meshStandardMaterial color="#ffffff" />
      </motion.mesh>
    </motion.group>
  );
};
