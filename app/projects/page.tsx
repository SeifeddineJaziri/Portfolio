"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import Link from "next/link"
import Image from "next/image"

import "../../styles/globals.css"
import "../../styles/projects.css"

// Placeholder component for ProjectViewer
const ProjectViewer = () => (
  <div className="project-viewer">
    <h2>Project Viewer</h2>
    <p>This is a placeholder for the 3D project viewer component</p>
  </div>
)

const projects = [
  {
    id: 1,
    title: "Computer Vision Expert",
    description:
      "Developed an advanced vehicle detection system using YOLO architecture with real-time license plate recognition through OCR technology. The solution achieves 98% accuracy in varying lighting conditions and can process up to 30 frames per second.",
    image: "/Car.png",
    tags: ["Python", "YOLO", "OCR"],
    demoUrl: "#",
    githubUrl: "#",
    modelUrl: "/assets/3d/duck.glb",
  },
  {
    id: 2,
    title: "Front-end Developer Angular",
    description:
      "Designed and implemented a comprehensive management system for Intel Morin educational center. The application features student tracking, curriculum management, and performance analytics dashboards, resulting in a 40% improvement in administrative efficiency.",
    image: "/IntelMorin.png",
    tags: ["Angular", "Xampp", "PHP"],
    demoUrl: "#",
    githubUrl: "#",
    modelUrl: "/assets/3d/duck.glb",
  },
  {
    id: 3,
    title: "Full Stack AI Application",
    description:
      "Created an innovative AI-powered solution for coffee shop management that integrates inventory tracking, sales forecasting, and customer behavior analysis. The system reduced inventory waste by 25% and increased customer satisfaction through personalized recommendations.",
    image: "/Dashboard.png",
    tags: ["React.js", "FastAPI", "PostgreSQL", "YOLO"],
    demoUrl: "#",
    githubUrl: "#",
    modelUrl: "/assets/3d/duck.glb",
  },
  {
    id: 4,
    title: "AI Solution Front-end",
    description:
      "Developed an intuitive and responsive front-end interface for a cutting-edge AI solution. The design focuses on data visualization, user experience, and accessibility, allowing non-technical users to leverage complex AI capabilities through a clean, modern interface.",
    image: "/BrewIQ.png",
    tags: ["Next.js", "React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    modelUrl: "/assets/3d/duck.glb",
  },
  {
    id: 5,
    title: "Classroom Conditions Predictor",
    description:
      "Built a sophisticated application for AIZU University that incorporates machine learning models to predict optimal classroom conditions. The system analyzes environmental data to enhance learning experiences, resulting in improved student focus and energy efficiency.",
    image: "/ClassroomConditions.png",
    tags: ["React.js", "Machine Learning", "Data Visualization"],
    demoUrl: "#",
    githubUrl: "#",
    modelUrl: "/assets/3d/duck.glb",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="projects-page">
      <Button variant="ghost" className="back-button" onClick={() => setSelectedProject(null)} asChild>
        <Link href="/">
          <ArrowLeft className="icon-left" />
          Back to Home
        </Link>
      </Button>

      <div className="projects-container">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="page-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Explore my latest 3D and interactive web experiences
        </motion.p>

        {selectedProject === null ? (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="project-card">
                  <div className="project-image-container">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="project-image"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="tags-container">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="view-project-button"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      View Project
                    </Button>
                    <div className="project-links">
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="icon" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="icon" />
                        </a>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <ProjectViewer />
        )}
      </div>
    </div>
  )
}

