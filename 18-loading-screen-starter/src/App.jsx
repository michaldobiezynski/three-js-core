import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

import { Suspense } from "react";

const CubeLoader = () => {
  return (
    <mesh>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshNormalMaterial color={"hotpink"} />
    </mesh>
  );
};

const LoadingScreen = () => {};

function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [-4, 4, 12], fov: 40 }}>
        <Suspense fallback={<CubeLoader />}>
          <group position-y={-1}>
            <Experience />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
