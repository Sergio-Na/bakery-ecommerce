import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
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
    <div className="flex flex-col justify-center items-center h-4/6 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400">
      {/* <h1 className="  lg:text-7xl top-40 fixed   text-white font-semibold subpixel-antialiased	tracking-wide sm:text-6xl ">
        Slices of Joy, Baked with Love
      </h1> */}
      <Canvas className="w-3/4">
        <PerspectiveCamera makeDefault fov={70} position={[0, 4, 10]} />
        <Suspense fallback={null}>
          <Rig>
            <Model />
          </Rig>
        </Suspense>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
      </Canvas>
    </div>
  );
};

export default CakeScene;
