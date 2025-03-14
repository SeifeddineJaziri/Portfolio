"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, Float, MeshDistortMaterial, MeshWobbleMaterial, Html } from "@react-three/drei"
import { useRouter } from "next/navigation"
import type { Group, Mesh } from "three"

export default function MainScene() {
  const router = useRouter()
  const groupRef = useRef<Group>(null)
  const sphereRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Animate the sphere on hover
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }

    if (sphereRef.current) {
      // Pulse effect on hover
      if (hovered) {
        sphereRef.current.scale.x = sphereRef.current.scale.y = sphereRef.current.scale.z = 1.2
      } else {
        sphereRef.current.scale.x =
          sphereRef.current.scale.y =
          sphereRef.current.scale.z =
            1 + Math.sin(state.clock.elapsedTime) * 0.05
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main floating sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh
          ref={sphereRef}
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => {
            setClicked(!clicked)
            if (!clicked) {
              router.push("/projects")
            }
          }}
        >
          <sphereGeometry args={[2, 64, 64]} />
          <MeshDistortMaterial
            color="#8a2be2"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />

          <Html position={[0, 0, 2.1]} center>
            <div className="bg-black/50 backdrop-blur-md p-4 rounded-lg text-center w-40">
              <p className="text-white text-sm">Click to explore</p>
            </div>
          </Html>
        </mesh>
      </Float>

      {/* Floating text */}
      <Float position={[0, 3, 0]} speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text
          font="/fonts/Geist_Bold.json"
          position={[0, 0, 0]}
          fontSize={0.8}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          CREATIVE DEVELOPER
        </Text>
      </Float>

      {/* Orbiting small spheres */}
      {[...Array(5)].map((_, i) => (
        <Float
          key={i}
          position={[Math.sin((i / 5) * Math.PI * 2) * 4, Math.cos((i / 5) * Math.PI * 2) * 4, 0]}
          speed={2 + i * 0.2}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh>
            <sphereGeometry args={[0.3, 32, 32]} />
            <MeshWobbleMaterial
              color={`hsl(${i * 50}, 100%, 75%)`}
              factor={0.4}
              speed={2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}

      {/* Skill cubes */}
      {["React", "Three.js", "WebGL", "Next.js", "UI/UX"].map((skill, i) => (
        <Float
          key={i}
          position={[
            Math.sin((i / 5) * Math.PI * 2) * 6,
            Math.cos((i / 5) * Math.PI * 2) * 6,
            Math.sin((i / 3) * Math.PI) * 2,
          ]}
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={0.5}
        >
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <MeshWobbleMaterial color={`hsl(${i * 50 + 120}, 100%, 70%)`} factor={0.2} speed={1} />
          </mesh>
          <Text
            font="/fonts/Geist_Regular.json"
            position={[0, 0, 0.6]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        </Float>
      ))}
    </group>
  )
}

