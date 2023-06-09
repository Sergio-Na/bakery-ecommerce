/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cake-processed.gltf
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { Vector3, Quaternion } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/cake-processed.gltf");

  return (
    <group
      className=""
      {...props}
      dispose={null}
      scale={8}
      rotation={[0.4, 0, 0]}
    >
      <group
        position={[0.28, -0.09, -1.18]}
        rotation={[-Math.PI, 1.12, -Math.PI]}
        scale={0.64}
      >
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials.placemat_white}
        />
        <mesh
          geometry={nodes.Plane003_1.geometry}
          material={materials.placemat_red}
        />
      </group>
      <mesh
        geometry={nodes.plate.geometry}
        material={materials.plate}
        position={[-0.14, -0.14, -1.13]}
        rotation={[-Math.PI, 0.83, -Math.PI]}
        scale={[1, 0.21, 1]}
      />
      <mesh
        geometry={nodes.cookie_2.geometry}
        material={materials.cookie}
        position={[0.49, -0.04, -0.69]}
        rotation={[0.03, -0.01, -0.02]}
        scale={[0.19, 0.05, 0.19]}
      />
      <mesh
        geometry={nodes.cookie_1.geometry}
        material={materials.cookie}
        position={[0.82, -0.02, -0.69]}
        rotation={[0, -0.24, -0.27]}
        scale={[0.19, 0.05, 0.19]}
      />
      <group
        position={[-0.06, 0.34, -0.99]}
        rotation={[0, 0.83, 0]}
        scale={[0.37, 0.24, 0.42]}
      >
        <mesh geometry={nodes.Cube.geometry} material={materials.cake} />
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials.cake_cream}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials.cake_cream_2}
        />
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials.chocolate}
          position={[0, 1.21, 0.02]}
          scale={[1.08, 1.66, 1.08]}
        />
      </group>
      <mesh
        geometry={nodes.strawberry.geometry}
        material={materials.strawberry}
        position={[-0.08, 0.15, -0.64]}
        rotation={[-0.03, 0.03, 1.11]}
        scale={[0.08, 0.11, 0.08]}
      >
        <mesh
          geometry={nodes.leaves.geometry}
          material={materials.leaf}
          position={[-0.04, 1.15, 0]}
          rotation={[1.53, -0.26, 1.67]}
          scale={[0.54, 0.53, 0.4]}
        />
      </mesh>
      <mesh
        geometry={nodes.strawberry001.geometry}
        material={materials.strawberry}
        position={[-0.13, 0.69, -1.16]}
        rotation={[-3.11, 0.53, -2.12]}
        scale={[0.07, 0.1, 0.07]}
      >
        <mesh
          geometry={nodes.leaves001.geometry}
          material={materials.leaf}
          position={[-0.04, 1.15, 0]}
          rotation={[1.53, -0.26, 1.67]}
          scale={[0.54, 0.53, 0.4]}
        />
      </mesh>
      <mesh
        geometry={nodes.strawberry002.geometry}
        material={materials.strawberry}
        position={[-0.21, 0.69, -1.03]}
        rotation={[-0.03, 0.15, 1.12]}
        scale={[0.05, 0.07, 0.05]}
      >
        <mesh
          geometry={nodes.leaves002.geometry}
          material={materials.leaf}
          position={[-0.04, 1.15, 0]}
          rotation={[1.53, -0.26, 1.67]}
          scale={[0.54, 0.53, 0.4]}
        />
      </mesh>
      <mesh
        geometry={nodes.drop_01.geometry}
        material={materials.chocolate}
        position={[-0.53, 0.07, -0.88]}
        rotation={[-0.06, 0.01, 0.01]}
        scale={[0.04, 0.02, 0.04]}
      />
      <mesh
        geometry={nodes.drop_02.geometry}
        material={materials.chocolate}
        position={[-0.45, 0.07, -0.82]}
        rotation={[-2.96, -0.51, -2.99]}
        scale={[0.02, 0.01, 0.02]}
      />
    </group>
  );
}

useGLTF.preload("/cake-processed.gltf");
