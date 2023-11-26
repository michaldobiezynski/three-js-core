import { useFBX, useGLTF, Gltf } from "@react-three/drei";

import { Fish } from "./Fish";

// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Experience = () => {
  const { scene } = useGLTF("/models/Fish.gltf");
  const dino = useFBX("/models/Dino.fbx");
  // const model = useLoader(GLTFLoader, "/models/Fish.gltf");

  return (
    <>
      <ambientLight intensity={0.3} />
      {/* <primitive object={scene} /> */}
      <Fish />
      {/* <primitive object={dino} scale={0.01} position-x={-3} /> */}
    </>
  );
};
