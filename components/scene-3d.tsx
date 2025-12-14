"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import type * as THREE from "three";
import { useSpring, animated, config } from "@react-spring/three";

interface Scene3DProps {
  scrollY: number;
}

function InteractiveSphere({
  position,
  color,
  size,
  scrollY,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  scrollY: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { scale, distort } = useSpring({
    scale: clicked ? 1.5 : hovered ? 1.2 : 1,
    distort: clicked ? 0.8 : hovered ? 0.6 : 0.4,
    config: config.wobbly,
  });

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      const scrollOffset = (scrollY / 1000) * 2;
      meshRef.current.position.y =
        position[1] + Math.sin(t * 0.5 + position[0]) * 0.5 - scrollOffset;
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <animated.mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setClicked(!clicked);
          setTimeout(() => setClicked(false), 600);
        }}
        onPointerOver={(e: React.PointerEvent) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e: React.PointerEvent) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[size, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </animated.mesh>
    </Float>
  );
}

function InteractiveTorus({
  position,
  color,
  scrollY,
}: {
  position: [number, number, number];
  color: string;
  scrollY: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { scale, rotation } = useSpring({
    scale: clicked ? 1.3 : hovered ? 1.15 : 1,
    rotation: clicked ? Math.PI * 2 : 0,
    config: config.wobbly,
  });

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      const scrollOffset = (scrollY / 1000) * 1.5;
      meshRef.current.position.y = position[1] - scrollOffset * 0.5;
      meshRef.current.rotation.x = -t * 0.3;
      meshRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.3}>
      <animated.mesh
        ref={meshRef}
        position={position}
        scale={scale}
        rotation-y={rotation}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setClicked(!clicked);
          setTimeout(() => setClicked(false), 600);
        }}
        onPointerOver={(e: React.PointerEvent) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e: React.PointerEvent) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </animated.mesh>
    </Float>
  );
}

function InteractiveBox({
  position,
  color,
  scrollY,
}: {
  position: [number, number, number];
  color: string;
  scrollY: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { scale } = useSpring({
    scale: clicked ? 1.5 : hovered ? 1.2 : 1,
    config: config.wobbly,
  });

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      const scrollOffset = (scrollY / 1000) * 3;
      meshRef.current.position.y = position[1] - scrollOffset * 0.8;
      meshRef.current.rotation.x = t * 0.4;
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.rotation.z = t * 0.2;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.5}>
      <animated.mesh
        ref={meshRef}
        position={position}
        scale={scale}
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          setClicked(!clicked);
          setTimeout(() => setClicked(false), 600);
        }}
        onPointerOver={(e: React.PointerEvent) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e: React.PointerEvent) => {
          e.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </animated.mesh>
    </Float>
  );
}

export function Scene3D({ scrollY }: Scene3DProps) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />

      <InteractiveSphere
        position={[2, 0, 0]}
        color="#2196F3"
        size={1}
        scrollY={scrollY}
      />
      <InteractiveTorus
        position={[-2.5, 0, -1]}
        color="#00BCD4"
        scrollY={scrollY}
      />
      <InteractiveBox position={[0, 2, -2]} color="#4FC3F7" scrollY={scrollY} />

      <InteractiveSphere
        position={[-3, 2, -2]}
        color="#4FC3F7"
        size={0.3}
        scrollY={scrollY}
      />
      <InteractiveSphere
        position={[3, -1.5, -1.5]}
        color="#00BCD4"
        size={0.4}
        scrollY={scrollY}
      />
      <InteractiveBox
        position={[-1, -2, -3]}
        color="#2196F3"
        scrollY={scrollY}
      />
    </>
  );
}
