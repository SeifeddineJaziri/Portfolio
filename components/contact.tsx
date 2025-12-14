"use client";

import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "seifeddinejaziri123@gmail.com",
      href: "mailto:seifeddinejaziri123@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+216 54 233 009",
      href: "tel:+21654233009",
    },
    {
      icon: Globe,
      label: "Portfolio",
      value: "portfolioseif.vercel.app",
      href: "https://portfolioseif.vercel.app/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SeifeddineJaziri",
      href: "https://github.com/SeifeddineJaziri",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "seifeddine-jaziri",
      href: "https://linkedin.com/in/seifeddine-jaziri",
    },
  ];

  return (
    <section id="contact" className="py-20 px-8 mb-20">
      <div className="w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
          I'm currently open to new opportunities and collaborations. Whether
          you have a project in mind or just want to connect, feel free to reach
          out!
        </p>

        <div className="w-full">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target={
                    contact.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    contact.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      {contact.label}
                    </p>
                    <p className="text-sm font-medium text-card-foreground">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <a href="mailto:seifeddinejaziri123@gmail.com">Send Message</a>
              </Button>
            </div>
          </Card>
        </div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>
            © 2025 Seifeddine JAZIRI. Built with Next.js & React Three Fiber.
          </p>
        </footer>
      </div>
    </section>
  );
}
