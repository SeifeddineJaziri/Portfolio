"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Code, ExternalLink, Github, Info } from "lucide-react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import the 3D model viewer with no SSR
const ModelViewer = dynamic(() => import("@/components/model-viewer"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center text-white bg-black/50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4"></div>
        <p>Loading 3D Model...</p>
      </div>
    </div>
  ),
})

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  modelUrl: string
}

type ProjectViewerProps = {
  project: Project
  onBack: () => void
}

export default function ProjectViewer({ project, onBack }: ProjectViewerProps) {
  const [activeTab, setActiveTab] = useState("preview")

  return (
    <motion.div
      className="bg-black/60 backdrop-blur-md rounded-xl overflow-hidden border border-purple-500/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between p-4 border-b border-purple-500/20">
        <Button variant="ghost" className="text-white" onClick={onBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5 text-white" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-white" />
            </a>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-black/40">
          <TabsTrigger value="preview" className="data-[state=active]:bg-purple-500/20">
            <Info className="mr-2 h-4 w-4" />
            Preview
          </TabsTrigger>
          <TabsTrigger value="code" className="data-[state=active]:bg-purple-500/20">
            <Code className="mr-2 h-4 w-4" />
            Technical Details
          </TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-[500px] bg-black/30">
              <ModelViewer modelUrl={project.modelUrl} />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-white/70">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-purple-500/20 text-purple-200">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="pt-6">
                <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                <p className="text-white/70">
                  This project showcases advanced 3D rendering techniques and interactive elements. Users can explore
                  the model by rotating, zooming, and interacting with various parts. The implementation uses modern
                  WebGL techniques for optimal performance.
                </p>
              </div>
              <div className="pt-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Technical Implementation</h3>
            <p className="text-white/70">
              This project was built using React Three Fiber, a React renderer for Three.js. The implementation includes
              custom shaders, optimized 3D models, and interactive elements.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
            <ul className="list-disc pl-5 text-white/70 space-y-2">
              <li>Custom GLSL shaders for realistic materials</li>
              <li>Optimized 3D models with LOD (Level of Detail)</li>
              <li>Interactive elements with raycasting</li>
              <li>Physics-based rendering for realistic lighting</li>
              <li>Performance optimizations for mobile devices</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
              {["React", "Three.js", "React Three Fiber", "GLSL Shaders", "TypeScript", "WebGL", "Framer Motion"].map(
                (tech) => (
                  <div key={tech} className="bg-purple-500/10 p-3 rounded-lg text-white text-center">
                    {tech}
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="pt-4">
            <Button variant="outline" className="border-purple-500/50 text-white hover:bg-purple-500/20" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Source Code
              </a>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  )
}

