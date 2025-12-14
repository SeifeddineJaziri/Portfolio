"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei"
import type * as THREE from "three"

interface Scene3DProps {
  scrollY: number
}

export function Scene3D({ scrollY }: Scene3DProps) {
  const sphereRef = useRef<THREE.Mesh>(null)
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    if (sphereRef.current) {
      sphereRef.current.rotation.x = t * 0.2
      sphereRef.current.rotation.y = t * 0.3
      sphereRef.current.position.y = Math.sin(t * 0.5) * 0.5
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = -t * 0.3
      torusRef.current.rotation.z = t * 0.2
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4FC3F7" />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#2196F3"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.3}>
        <mesh ref={torusRef} position={[-2.5, 0, -1]}>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <MeshDistortMaterial
            color="#00BCD4"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Additional decorative spheres */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <Sphere args={[0.3, 32, 32]} position={[-3, 2, -2]}>
          <meshStandardMaterial color="#4FC3F7" roughness={0.3} metalness={0.7} />
        </Sphere>
      </Float>

      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.4}>
        <Sphere args={[0.4, 32, 32]} position={[3, -1.5, -1.5]}>
          <meshStandardMaterial color="#00BCD4" roughness={0.3} metalness={0.7} />
        </Sphere>
      </Float>
    </>
  )
}
