"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  Float,
  PerspectiveCamera,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Text,
  Stars,
} from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"
import { type Group, type Mesh, Vector3 } from "three"

import "../styles/globals.css"

function FloatingObjects() {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main sphere */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 64, 64]} />
          <MeshDistortMaterial
            color="#8a2be2"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Orbiting objects */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 5 + Math.random() * 2
        const posX = Math.sin(angle) * radius
        const posY = (Math.random() - 0.5) * 4
        const posZ = Math.cos(angle) * radius
        const scale = 0.2 + Math.random() * 0.3

        return (
          <Float
            key={i}
            position={[posX, posY, posZ]}
            speed={1 + Math.random()}
            rotationIntensity={0.5}
            floatIntensity={0.5}
          >
            <mesh scale={scale}>
              {Math.random() > 0.5 ? <boxGeometry args={[1, 1, 1]} /> : <sphereGeometry args={[1, 16, 16]} />}
              <MeshWobbleMaterial
                color={`hsl(${i * 40}, 100%, 70%)`}
                factor={0.4}
                speed={1}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>
          </Float>
        )
      })}

      {/* Floating text elements */}
      {["Creative", "Innovative", "Interactive", "Immersive"].map((text, i) => {
        const angle = (i / 4) * Math.PI * 2
        const radius = 8
        const posX = Math.sin(angle) * radius
        const posY = Math.random() * 6 - 3
        const posZ = Math.cos(angle) * radius

        return (
          <Float key={i} position={[posX, posY, posZ]} speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
            <Text
              font="/fonts/Geist_Bold.json"
              fontSize={0.5}
              color={`hsl(${i * 60}, 100%, 80%)`}
              anchorX="center"
              anchorY="middle"
            >
              {text}
            </Text>
          </Float>
        )
      })}
    </group>
  )
}

function AnimatedSpheres() {
  const group = useRef<Group>(null)
  const spheres = useRef<Mesh[]>([])

  // Store initial positions
  const positions = useRef<Vector3[]>([])

  // Initialize positions
  if (positions.current.length === 0) {
    for (let i = 0; i < 15; i++) {
      positions.current.push(
        new Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20),
      )
    }
  }

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    spheres.current.forEach((sphere, i) => {
      if (sphere) {
        // Create a wave-like motion
        sphere.position.x = positions.current[i].x + Math.sin(time * 0.5 + i) * 0.5
        sphere.position.y = positions.current[i].y + Math.cos(time * 0.5 + i) * 0.5
        sphere.position.z = positions.current[i].z + Math.sin(time * 0.3 + i) * 0.5
      }
    })
  })

  return (
    <group ref={group}>
      {[...Array(15)].map((_, i) => (
        <mesh
          key={i}
          position={positions.current[i].toArray()}
          ref={(el) => {
            if (el) spheres.current[i] = el
          }}
        >
          <sphereGeometry args={[0.2 + Math.random() * 0.2, 16, 16]} />
          <meshStandardMaterial
            color={`hsl(${i * 20}, 100%, 70%)`}
            emissive={`hsl(${i * 20}, 100%, 50%)`}
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function HomeScene() {
  return (
    <ErrorBoundary
      fallback={
        <div className="error-fallback">
          <div className="error-content">
            <h2 className="error-title">Oops! The 3D scene crashed</h2>
            <p>Try refreshing the page or using a different browser</p>
          </div>
        </div>
      }
    >
      <div className="scene-wrapper">
        <Canvas>
          <color attach="background" args={["#050505"]} />
          <fog attach="fog" args={["#050505", 10, 30]} />
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />

          <Suspense fallback={null}>
            <FloatingObjects />
            <AnimatedSpheres />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Environment preset="night" />
          </Suspense>

          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.2} color="#8a2be2" />
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}

