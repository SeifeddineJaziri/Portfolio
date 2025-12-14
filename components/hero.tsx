"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-20">
      <div className="w-full text-center">
        <div className="inline-block animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent text-balance">
            Seifeddine JAZIRI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Software Engineer
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Specializing in Computer Vision, AI/ML, and Full-stack Development
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up animation-delay-200">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">View Work</a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 animate-fade-in-up animation-delay-400">
          <a
            href="https://github.com/SeifeddineJaziri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/seifeddine-jaziri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:seifeddinejaziri123@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
