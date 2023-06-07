import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useCamera, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Model } from "./Model";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Rig({ children }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    );
  });
  return <group ref={ref}>{children}</group>;
}

const CakeScene = () => {
  return (
    <Canvas className="">
      <PerspectiveCamera makeDefault fov={70} position={[0, 10, 15]} />
      {/* <OrbitControls enableZoom={false} /> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-2, 5, 2]} intensity={1} />
      <Suspense fallback={null}>
        {/* <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshNormalMaterial attach="material" />
          </mesh> */}
        <Rig>
          <Model className="absolute top-10 " />
        </Rig>
      </Suspense>
    </Canvas>
  );
};

export default CakeScene;
