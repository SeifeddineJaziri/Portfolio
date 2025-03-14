"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshDistortMaterial } from "@react-three/drei"
import type { Mesh } from "three"

export function ContactSphere() {
  const sphereRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial color="#8a2be2" attach="material" distort={0.6} speed={2} roughness={0.2} metalness={0.8} />
    </mesh>
  )
}

