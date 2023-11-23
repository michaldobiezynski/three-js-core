import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";

export const Controls = {
  forward: "forward",
  backward: "backward",
  left: "left",
  right: "right",
  up: "up",
  down: "down",
  zoomIn: "zoomIn",
  zoomOut: "zoomOut",
};

function App() {
  const map = useMemo(() => {
    return [
      {
        name: Controls.forward,
        keys: ["KeyW", "ArrowUp"],
      },
      {
        name: Controls.backward,
        keys: ["KeyS", "ArrowDown"],
      },
      {
        name: Controls.left,
        keys: ["KeyA", "ArrowLeft"],
      },
      {
        name: Controls.right,
        keys: ["KeyD", "ArrowRight"],
      },
      {
        name: Controls.up,
        keys: ["Space"],
      },
      {
        name: Controls.down,
        keys: ["ShiftLeft"],
      },
      {
        name: Controls.zoomIn,
        keys: ["KeyZ"],
      },
      {
        name: Controls.zoomOut,
        keys: ["KeyX"],
      },
    ];
  });

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas camera={{ position: [0, 1, 8], fov: 42 }}>
          <Experience />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
