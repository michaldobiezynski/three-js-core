import { useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Experience = () => {
  const { scene } = useGLTF("/models/Fish.gltf");
  // const model = useLoader(GLTFLoader, "/models/Fish.gltf");

  return (
    <>
      <primitive object={scene} />
    </>
  );
};
