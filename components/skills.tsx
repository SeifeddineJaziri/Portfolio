"use client";

import { Card } from "@/components/ui/card";
import { Code, Server, Smartphone, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Angular",
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "WebSockets", "Redis", "Node.js"],
  },
  {
    icon: Brain,
    title: "AI & Computer Vision",
    skills: [
      "YOLO",
      "OpenCV",
      "LangChain",
      "LangGraph",
      "Mediapipe",
      "RAG",
      "MCP",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile & Tools",
    skills: [
      "Flutter",
      "Riverpod",
      "Git",
      "Postman",
      "VS Code",
      "Qdrant",
      "Elasticsearch",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-8">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="text-sm text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-accent mt-1">▸</span>
                    <span>{skill}</span>
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
