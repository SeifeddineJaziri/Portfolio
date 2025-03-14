"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"
import MainScene from "@/components/main-scene"

export default function Scene3D() {
  return (
    <ErrorBoundary
      fallback={
        <div className="w-full h-screen bg-black flex items-center justify-center text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Oops! The 3D scene crashed</h2>
            <p>Try refreshing the page or using a different browser</p>
          </div>
        </div>
      }
    >
      <div className="w-full h-screen">
        <Canvas shadows>
          <color attach="background" args={["#000000"]} />
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
          <Suspense fallback={null}>
            <MainScene />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.5}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}

