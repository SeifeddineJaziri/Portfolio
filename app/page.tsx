"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Briefcase, User, Mail, HomeIcon } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import dynamic from "next/dynamic"

// Import CSS
import "../styles/globals.css"
import "../styles/home.css"
import "../styles/components.css"

// Dynamically import the 3D scene component with no SSR
const HomeScene = dynamic(() => import("@/components/home-scene"), {
  ssr: false,
  loading: () => (
    <div className="scene-loader">
      <div className="loader-spinner"></div>
    </div>
  ),
})

export default function Home() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const featuredRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToFeatured = () => {
    featuredRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <main className="main">
      {/* Hero Section with 3D Background */}
      <section className="hero-section">
        {/* 3D Background Scene */}
        <div className="scene-container">
          <HomeScene />
        </div>

        {/* Content Overlay */}
        <div className="content-overlay">
          {/* Header */}
          <div className="header">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="logo">
                <span className="logo-gradient">Seifeddine JAZIRI</span>
              </h1>
              <p className="tagline">AI & Software Engineer</p>
            </motion.div>

            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="desktop-nav"
            >
              <ul className="nav-list">
                <li>
                  <button
                    className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                    onClick={() => setActiveSection("home")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button className="nav-link" onClick={() => router.push("/projects")}>
                    Projects
                  </button>
                </li>
                <li>
                  <button className="nav-link" onClick={() => router.push("/about")}>
                    About
                  </button>
                </li>
                <li>
                  <button className="nav-link" onClick={() => router.push("/contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </motion.nav>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mobile-nav-container">
              <button
                className={`mobile-nav-button ${activeSection === "home" ? "active" : ""}`}
                onClick={() => setActiveSection("home")}
              >
                <HomeIcon size={20} />
              </button>
              <button className="mobile-nav-button" onClick={() => router.push("/projects")}>
                <Briefcase size={20} />
              </button>
              <button className="mobile-nav-button" onClick={() => router.push("/about")}>
                <User size={20} />
              </button>
              <button className="mobile-nav-button" onClick={() => router.push("/contact")}>
                <Mail size={20} />
              </button>
            </div>
          </motion.div>

          {/* Hero Content */}
          <div className="hero-content">
            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building <span className="logo-gradient">Intelligent</span> Solutions
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Combining AI expertise and software engineering to create innovative applications that solve real-world
              problems with cutting-edge technology.
            </motion.p>

            <motion.div
              className="button-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button onClick={() => router.push("/projects")} className="primary-button">
                View My Work
                <ArrowRight className="ml-2" size={16} />
              </button>

              <button onClick={() => router.push("/contact")} className="secondary-button">
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={scrollToFeatured}
          >
            <motion.div
              className="scroll-indicator-dot"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
            >
              <div className="scroll-indicator-dot-inner"></div>
            </motion.div>
            <p className="scroll-text">Scroll to explore</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="social-links"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="social-links-container">
              <button className="social-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
              <button className="social-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
              <button className="social-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={featuredRef} className="featured-section">
        <div className="section-container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="section-description">
                A selection of my most innovative AI and software engineering projects. Each project demonstrates my
                expertise in different technologies and problem domains.
              </p>
            </div>
            <button onClick={() => router.push("/projects")} className="view-all-button">
              View All Projects
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>

          <div className="projects-grid">
            {[
              {
                title: "Computer Vision Expert",
                description:
                  "Advanced vehicle detection system using YOLO architecture with real-time license plate recognition through OCR technology. Achieves 98% accuracy in varying lighting conditions.",
                image: "/Car.png",
                tags: ["Python", "YOLO", "OCR"],
              },
              {
                title: "Intel Morin Management System",
                description:
                  "Comprehensive management system for Intel Morin educational center featuring student tracking, curriculum management, and performance analytics dashboards.",
                image: "/IntelMorin.png",
                tags: ["Angular", "Xampp", "PHP"],
              },
              {
                title: "AI-Powered Coffee Shop Management",
                description:
                  "Innovative solution that integrates inventory tracking, sales forecasting, and customer behavior analysis, reducing inventory waste by 25%.",
                image: "/Dashboard.png",
                tags: ["React.js", "FastAPI", "PostgreSQL", "YOLO"],
              },
              {
                title: "AI Solution Front-end",
                description:
                  "Intuitive and responsive interface for a cutting-edge AI solution, focusing on data visualization and accessibility for non-technical users.",
                image: "/BrewIQ.png",
                tags: ["Next.js", "React", "TypeScript"],
              },
              {
                title: "Classroom Conditions Predictor",
                description:
                  "Sophisticated application for AIZU University that incorporates machine learning models to predict optimal classroom conditions for improved learning experiences.",
                image: "/ClassroomConditions.png",
                tags: ["React.js", "Machine Learning", "Data Visualization"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-card">
                  <div className="project-image-container">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="project-image"
                    />
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="tags-container">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="view-details-button" onClick={() => router.push("/projects")}>
                      View Details
                      <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="skills-header"
          >
          </motion.div>

          <div className="skills-grid">
            {[
              {
                title: "Computer Vision",
                description:
                  "Developing advanced object detection and recognition systems using YOLO and OCR technologies",
                icon: "👁️",
              },
              {
                title: "AI & Machine Learning",
                description:
                  "Building intelligent systems that analyze data and make predictions for real-world applications",
                icon: "🧠",
              },
              {
                title: "Full Stack Development",
                description: "Creating end-to-end applications with React, Next.js, FastAPI, and PostgreSQL",
                icon: "⚛️",
              },
              {
                title: "Front-end Development",
                description: "Building responsive and intuitive user interfaces with Angular, React, and Next.js",
                icon: "🎨",
              },
              {
                title: "Data Visualization",
                description:
                  "Transforming complex data into clear, actionable insights through interactive visualizations",
                icon: "📊",
              },
              {
                title: "Software Architecture",
                description: "Designing scalable, maintainable systems that solve complex business problems",
                icon: "🏗️",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-card">
                  <div className="skill-content">
                    <div className="skill-icon">{skill.icon}</div>
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="learn-more-container"
          >
            <button onClick={() => router.push("/about")} className="primary-button">
              Learn More About Me
              <ArrowRight className="ml-2" size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cta-title"
          >
            Ready to build intelligent solutions?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="cta-description"
          >
            Let&apos;s collaborate on your next AI or software project and create innovative technology that solves
            real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <button onClick={() => router.push("/contact")} className="primary-button">
              Get In Touch
              <ArrowRight className="ml-2" size={16} />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

