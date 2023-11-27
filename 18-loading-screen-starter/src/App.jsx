import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useProgress } from "@react-three/drei";

import { Suspense } from "react";

const LoadingScreen = () => {
  const { isReady, progress } = useProgress();

  return (
    <div className="loading-screen">
      <div className="loading-screen__container">
        <h1 className="loading-screen_title">3D Web Agency</h1>
        <p>Loading... {parseInt(progress)}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <LoadingScreen />
      <Canvas camera={{ position: [-4, 4, 12], fov: 40 }}>
        <Suspense>
          <group position-y={-1}>
            <Experience />
          </group>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
