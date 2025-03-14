"use client"

import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { ErrorBoundary } from "react-error-boundary"

export default function ContactSphereContainer() {
  return (
    <div className="h-[300px] bg-black/30 rounded-xl overflow-hidden mb-6">
      <ErrorBoundary
        fallback={<div className="h-full flex items-center justify-center text-white">Failed to load 3D element</div>}
      >
        <Canvas>
          <color attach="background" args={["#000000"]} />
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#8a2be2" roughness={0.2} metalness={0.8} />
          </mesh>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}

