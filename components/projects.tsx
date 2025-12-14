"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: "kff-gpt", // Added unique ID for routing
    title: "KFF GPT - RAG Chatbot",
    description:
      "Advanced Retrieval-Augmented Generation chatbot leveraging vector databases for intelligent information retrieval. Implemented semantic search using Qdrant for vector storage, BM25 for keyword matching, and Elasticsearch for full-text search capabilities. Utilized Model Context Protocol (MCP) for seamless context management and WebSockets for real-time bidirectional communication, enabling instant query responses and dynamic conversation flow.",
    tags: ["Qdrant", "Elasticsearch", "MCP", "WebSockets", "RAG", "LangChain"],
    videoPath: "/videos/kff-gpt-demo.mp4",
  },
  {
    id: "wildfire-detection", // Added unique ID for routing
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
    id: "coffee-shop", // Added unique ID for routing
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
    videoPath: "app/assets/coffee-shop-demo.mkv",
  },
  {
    id: "ai-chatbot", // Added unique ID for routing
    title: "AI ChatBot with LangChain",
    description:
      "Intelligent conversational AI system implementing Model Context Protocol (MCP) for efficient API consumption and data retrieval. Utilized LangChain for natural language processing and understanding, LangGraph for managing complex conversation flows and state transitions, and WebSockets for real-time communication. Features context-aware responses, multi-turn conversations, and seamless integration with external data sources.",
    tags: ["LangChain", "LangGraph", "MCP", "WebSockets", "NLP", "AI"],
    videoPath: "/videos/ai-chatbot-demo.mp4",
  },
  {
    id: "cv-drawer", // Added unique ID for routing
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
    id: "sales-app", // Added unique ID for routing
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

export function Projects() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-8">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Link key={idx} href={`/projects/${project.id}`}>
              <Card className="p-0 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:scale-105 group overflow-hidden cursor-pointer">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onMouseEnter={(e) => {
                      setPlayingVideo(idx);
                      e.currentTarget.play();
                    }}
                    onMouseLeave={(e) => {
                      setPlayingVideo(null);
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  >
                    <source src={project.videoPath} type="video/mp4" />
                  </video>
                  {playingVideo !== idx && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play
                          className="text-primary-foreground ml-1"
                          size={28}
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-card-foreground text-balance">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0"
                      size={18}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed text-pretty">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <Badge key={tIdx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
