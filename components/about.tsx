"use client";

import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 px-8">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a 21-year-old Software Engineering student at the Higher
              Institute of Computer Science and Communication Techniques
              (ISTIC), currently in my third year specializing in Software
              Engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong passion for AI and Computer Vision, I've worked on
              real-time detection systems, RAG chatbots, and full-stack
              applications. I combine technical expertise with creative
              problem-solving to build innovative solutions.
            </p>
          </Card>

          <div className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-card-foreground">
                  Education
                </h3>
                <p className="text-sm text-muted-foreground">
                  3rd Year Software Engineering at ISTIC
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Award className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-card-foreground">
                  Achievement
                </h3>
                <p className="text-sm text-muted-foreground">
                  Winner of IDEATHON ISTIC-AIZU Competition
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-card-foreground">
                  Activities
                </h3>
                <p className="text-sm text-muted-foreground">
                  Graphic Designer & Member of Elite Council
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
