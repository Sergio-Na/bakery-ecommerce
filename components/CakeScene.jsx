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
    <div className="flex justify-center items-center h-screen">
      <Canvas className=" border-blue-500 border-solid bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 w-3/4">
        <PerspectiveCamera makeDefault fov={70} position={[0, 1, 10]} />
        <Suspense fallback={null}>
          {/* <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
            <meshNormalMaterial attach="material" />
          </mesh> */}
          <Rig>
            <Model className="" />
          </Rig>
        </Suspense>
        {/* <OrbitControls enableZoom={false} /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default CakeScene;
