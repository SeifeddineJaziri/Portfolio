"use client";

import { useParams, useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    id: "kff-gpt",
    title: "KFF GPT - RAG Chatbot",
    description:
      "Advanced Retrieval-Augmented Generation chatbot leveraging vector databases for intelligent information retrieval. Implemented semantic search using Qdrant for vector storage, BM25 for keyword matching, and Elasticsearch for full-text search capabilities. Utilized Model Context Protocol (MCP) for seamless context management and WebSockets for real-time bidirectional communication, enabling instant query responses and dynamic conversation flow.",
    tags: ["Qdrant", "Elasticsearch", "MCP", "WebSockets", "RAG", "LangChain"],
    videoPath: "/videos/kff-gpt-demo.mp4",
  },
  {
    id: "wildfire-detection",
    title: "Wildfire Detection System",
    description:
      "Real-time wildfire detection platform with Next.js frontend and FastAPI backend. Trained custom YOLO models for smoke and fire detection with 95% accuracy. Implemented OpenCV for image preprocessing and computer vision pipeline. Features real-time monitoring dashboard with instant alert notifications, geolocation mapping, and historical data analytics for early wildfire prevention and response.",
    tags: [
      "Next.js",
      "FastAPI",
      "YOLO",
      "Computer Vision",
      "OpenCV",
      "Real-time Alerts",
    ],
    videoPath: "/videos/wildfire-detection-demo.mp4",
  },
  {
    id: "coffee-shop",
    title: "Coffee Shop Management Platform",
    description:
      "Comprehensive point-of-sale and inventory management system with real-time object detection. Trained YOLO models to automatically recognize drinks, food items, and chicha products for quick checkout. Integrated OpenCV for image processing, WebSockets for live updates, FastAPI for high-performance backend, and Redis for caching frequently accessed data, reducing response times by 60%.",
    tags: [
      "YOLO",
      "FastAPI",
      "Redis",
      "Next.js",
      "WebSockets",
      "Object Detection",
    ],
    videoPath: "/videos/coffee-shop-demo.mkv",
  },
  {
    id: "ai-chatbot",
    title: "AI ChatBot with LangChain",
    description:
      "Intelligent conversational AI system implementing Model Context Protocol (MCP) for efficient API consumption and data retrieval. Utilized LangChain for natural language processing and understanding, LangGraph for managing complex conversation flows and state transitions, and WebSockets for real-time communication. Features context-aware responses, multi-turn conversations, and seamless integration with external data sources.",
    tags: ["LangChain", "LangGraph", "MCP", "WebSockets", "NLP", "AI"],
    videoPath: "/videos/ai-chatbot-demo.mp4",
  },
  {
    id: "cv-drawer",
    title: "Computer Vision Drawer",
    description:
      "Interactive hand gesture recognition system using Mediapipe for precise hand landmark detection. Developed virtual drawing application that tracks finger movements in real-time, allowing users to draw using gestures. Built AI-powered virtual mouse for hands-free computer control and created an engaging balloon-popping game using index finger recognition. Achieved 30 FPS performance with sub-50ms latency.",
    tags: [
      "Mediapipe",
      "OpenCV",
      "Hand Tracking",
      "Python",
      "Gesture Recognition",
    ],
    videoPath: "/videos/cv-drawer-demo.mp4",
  },
  {
    id: "sales-app",
    title: "Sales Management Mobile App",
    description:
      "Full-featured Flutter mobile application for comprehensive sales tracking and business management. Implemented Riverpod for efficient state management, ensuring reactive UI updates and optimal performance. Features include inventory management, customer relationship tracking, sales analytics with charts, invoice generation, and offline-first architecture with data synchronization.",
    tags: [
      "Flutter",
      "Riverpod",
      "Mobile Development",
      "Dart",
      "State Management",
    ],
    videoPath: "/videos/sales-app-demo.mp4",
  },
];

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const currentProject = projects.find((p) => p.id === projectId);
  const otherProjects = projects.filter((p) => p.id !== projectId);

  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="px-6 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => router.push("/#projects")}
            className="hover:bg-primary/10"
          >
            <ArrowLeft size={20} />
          </Button>
          <h1 className="text-xl font-semibold">Portfolio Projects</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Video Player Section */}
        <div className="flex-1">
          <div className="space-y-4">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <video className="w-full h-full" controls autoPlay loop muted>
                <source src={currentProject.videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Project Details */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h2 className="text-2xl font-bold mb-4 text-card-foreground">
                {currentProject.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {currentProject.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {currentProject.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Sidebar - Other Projects */}
        <div className="lg:w-[400px] space-y-3">
          <h3 className="text-lg font-semibold px-2 mb-4">Other Projects</h3>
          <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="p-0 bg-card/50 backdrop-blur-sm border-border hover:bg-card/70 cursor-pointer transition-all group"
                onClick={() => router.push(`/projects/${project.id}`)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex gap-3 p-3">
                  {/* Video Thumbnail */}
                  <div className="relative w-40 aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded overflow-hidden flex-shrink-0">
                    <video
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.videoPath} type="video/mp4" />
                    </video>
                    {hoveredProject !== project.id && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                          <Play
                            className="text-primary-foreground ml-0.5"
                            size={14}
                            fill="currentColor"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
