"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Software Developer",
    company: "Artificial Insight",
    period: "2025",
    projects: [
      "Wildfire Detection System - Built full-stack application with Next.js & FastAPI",
      "SafeOps Airport Management - Developed Flutter mobile interfaces",
      "KFF GPT RAG Chatbot - Implemented vector database with Qdrant & Elasticsearch",
      "DevOps AutoPilot - Created pipeline recommendation UI",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2025",
    projects: [
      "Professional portfolio for musician Andrea Causapruna (andreacausapruna.com)",
      "Intel Morin Educational Center - Designed UI with Angular",
    ],
  },
  {
    title: "PFE Intern - Computer Vision & Full-stack",
    company: "Internship Project",
    period: "2025",
    projects: [
      "Trained 3 YOLO models for real-time detection (drinks, food, chicha)",
      "Built FastAPI backend with Redis for caching and session management",
      "Developed complete coffee shop management platform with Next.js",
      "Implemented 8 CRUD operations with soft delete functionality",
    ],
  },
  {
    title: "Frontend Development Intern",
    company: "University of AIZU (Japan)",
    period: "Summer 2023",
    projects: [
      "Selected as winner of IDEATHON ISTIC-AIZU competition",
      "Developed frontend using React.js for educational platform",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <Badge variant="secondary" className="mt-2 md:mt-0">
                  {exp.period}
                </Badge>
              </div>
              <ul className="space-y-2">
                {exp.projects.map((project, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
