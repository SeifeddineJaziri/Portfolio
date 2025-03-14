"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <ErrorBoundary
      fallback={<div className="h-full flex items-center justify-center text-white">Failed to load 3D model</div>}
    >
      <div className="h-full w-full">
        <Canvas shadows>
          <color attach="background" args={["#000000"]} />
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <Suspense fallback={null}>
            <Model url={modelUrl} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={true} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </ErrorBoundary>
  )
}

