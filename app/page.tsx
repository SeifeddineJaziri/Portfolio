"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Environment } from "@react-three/drei"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Scene3D } from "@/components/scene-3d"
import { useEffect, useState } from "react"

export default function Page() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-background">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Scene3D scrollY={scrollY} />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}
