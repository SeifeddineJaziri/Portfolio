"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "KFF GPT - RAG Chatbot",
    description:
      "Built a Retrieval-Augmented Generation chatbot with vector database using Qdrant, BM25, and Elasticsearch for semantic search. Utilized MCP for context management and WebSockets for real-time communication.",
    tags: ["Qdrant", "Elasticsearch", "MCP", "WebSockets", "RAG"],
  },
  {
    title: "Wildfire Detection System",
    description:
      "Full-stack web application for real-time wildfire detection using Next.js frontend and FastAPI backend. Trained and deployed computer vision models for smoke and fire detection with monitoring alerts.",
    tags: ["Next.js", "FastAPI", "Computer Vision", "OpenCV"],
  },
  {
    title: "Coffee Shop Management Platform",
    description:
      "Complete management system with real-time YOLO detection for drinks, food, and chicha. Integrated OpenCV and WebSockets with FastAPI backend and Redis caching.",
    tags: ["YOLO", "FastAPI", "Redis", "Next.js", "WebSockets"],
  },
  {
    title: "AI ChatBot with LangChain",
    description:
      "Implemented chatbot using Model Context Protocol for API consumption. Utilized LangChain for NLP and LangGraph for conversation flow management with real-time WebSocket communication.",
    tags: ["LangChain", "LangGraph", "MCP", "WebSockets"],
  },
  {
    title: "Computer Vision Drawer",
    description:
      "Built hand tracking system for drawing using finger gestures with Mediapipe. Developed AI-powered virtual mouse and interactive balloon-popping game using index finger recognition.",
    tags: ["Mediapipe", "OpenCV", "Hand Tracking", "Python"],
  },
  {
    title: "Sales Management Mobile App",
    description:
      "Developed comprehensive Flutter application for sales management with Riverpod for efficient state management and reactive UI updates.",
    tags: ["Flutter", "Riverpod", "Mobile Development"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-card-foreground text-balance">{project.title}</h3>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={18} />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-pretty">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <Badge key={tIdx} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
