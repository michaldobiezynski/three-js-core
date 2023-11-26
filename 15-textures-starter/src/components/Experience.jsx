import { useTexture, useVideoTexture } from "@react-three/drei";

import * as THREE from "three";

export const Experience = () => {
  // const props = useTexture({
  //   map: "/textures/PavingStones130_1K_Color.jpg",
  //   normalMap: "/textures/PavingStones130_1K_NormalGL.jpg",
  //   roughnessMap: "/textures/PavingStones130_1K_Roughness.jpg",
  //   // displacementMap: "/textures/PavingStones130_1K_Displacement.jpg",
  //   aoMap: "/textures/PavingStones130_1K_AmbientOcclusion.jpg",
  // });
  // texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  // texture.rotation = Math.PI / 4;
  // texture.repeat.set(0.2, 0.2);

  // const texture = useTexture("/textures/matcapTexture.png");
  const texture = useVideoTexture("/textures/spongebob-squarepants.mp4");

  return (
    <>
      <mesh>
        <boxGeometry />
        {/* <meshMatcapMaterial matcap={texture} /> */}
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};
