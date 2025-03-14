"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Download, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Head from 'next/head'
import { Button } from "../../components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Progress } from "../../components/ui/progress"

import "../../styles/globals.css"
import "../../styles/about.css"

export default function AboutPage() {
  const skills = [
    { name: "Python / Computer Vision", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "YOLO / OCR", level: 98 },
    { name: "Angular", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Machine Learning", level: 92 },
    { name: "FastAPI", level: 80 },
    { name: "PostgreSQL", level: 85 },
    { name: "Data Visualization", level: 88 },
  ]

  const experiences = [
    {
      title: "Computer Vision Expert",
      company: "Vehicle Detection System Project",
      period: "2023",
      description:
        "Developed an advanced vehicle detection system using YOLO architecture with real-time license plate recognition through OCR technology. The solution achieves 98% accuracy in varying lighting conditions and can process up to 30 frames per second.",
    },
    {
      title: "Front-end Developer",
      company: "Intel Morin Educational Center",
      period: "2022",
      description:
        "Designed and implemented a comprehensive management system for Intel Morin educational center. The application features student tracking, curriculum management, and performance analytics dashboards, resulting in a 40% improvement in administrative efficiency.",
    },
    {
      title: "Full Stack AI Developer",
      company: "Coffee Shop Management Solution",
      period: "2022",
      description:
        "Created an innovative AI-powered solution for coffee shop management that integrates inventory tracking, sales forecasting, and customer behavior analysis. The system reduced inventory waste by 25% and increased customer satisfaction through personalized recommendations.",
    },
    {
      title: "AI Solution Front-end Developer",
      company: "AI Interface Project",
      period: "2021",
      description:
        "Developed an intuitive and responsive front-end interface for a cutting-edge AI solution. The design focuses on data visualization, user experience, and accessibility, allowing non-technical users to leverage complex AI capabilities through a clean, modern interface.",
    },
    {
      title: "Machine Learning Engineer",
      company: "AIZU University",
      period: "2021",
      description:
        "Built a sophisticated application for AIZU University that incorporates machine learning models to predict optimal classroom conditions. The system analyzes environmental data to enhance learning experiences, resulting in improved student focus and energy efficiency.",
    },
  ]

  return (
    <>
      <Head>
        {/* Add the PushAlert script in the head */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(d, t) {
              var g = d.createElement(t),
              s = d.getElementsByTagName(t)[0];
              g.src = "https://cdn.pushalert.co/integrate_e4d04b3b90f3296397970be97f459d73.js";
              s.parentNode.insertBefore(g, s);
            }(document, "script"));`
          }}
        />
      </Head>

      <div className="about-page">
        <Button variant="ghost" className="back-button" asChild>
          <Link href="/">
            <ArrowLeft className="icon-left" />
            Back to Home
          </Link>
        </Button>

        <div className="about-container">
          <motion.div
            className="about-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="sidebar">
              <div className="profile-card">
                <div className="profile-image-container">
                  <Image src="/Me.jpg" alt="Profile" fill className="profile-image" />
                </div>

                <h1 className="profile-name">Seifeddine JAZIRI</h1>
                <p className="profile-title">AI & Computer Vision Specialist | Full Stack Developer</p>

                <div className="social-links">
                  <Button variant="ghost" size="icon" className="social-button">
                    <Github className="icon" />
                  </Button>
                  <Button variant="ghost" size="icon" className="social-button">
                    <Linkedin className="icon" />
                  </Button>
                  <Button variant="ghost" size="icon" className="social-button">
                    <Twitter className="icon" />
                  </Button>
                  <Button variant="ghost" size="icon" className="social-button">
                    <Mail className="icon" />
                  </Button>
                </div>

                <div className="profile-details">
                  <div className="detail-item">
                    <h3 className="detail-label">Location</h3>
                    <p className="detail-value">Tunis , El Mourouj 6 </p>
                  </div>
                  <div className="detail-item">
                    <h3 className="detail-label">Email</h3>
                    <p className="detail-value">seifeddinejaziri123@gmail.com</p>
                  </div>
                  <div className="detail-item">
                    <h3 className="detail-label">Phone number</h3>
                    <p className="detail-value">+216 54 233 009</p>
                  </div>
                  <div className="detail-item">
                    <h3 className="detail-label">Availability</h3>
                    <p className="detail-value available">Available for Opportunities</p>
                  </div>
                </div>

                <div className="resume-button-container">
                  <Button className="resume-button">
                    <Download className="icon-left" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>

            <div className="main-content">
              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="section-title">About Me</h2>
                <p className="section-text">
                I&apos;m a versatile developer specializing in AI, computer vision, and full-stack development. With expertise in both front-end and back-end technologies, I create innovative solutions that leverage cutting-edge AI capabilities to solve real-world problems.
                </p>
                <p className="section-text">
                  My work spans from developing advanced vehicle detection systems with YOLO architecture to creating intuitive interfaces for complex AI applications. I&apos;m passionate about building technology that enhances efficiency, improves user experiences, and delivers measurable results across various domains.
                </p>
              </motion.div>

              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="section-title">Skills</h2>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="skill-progress" />
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                  {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-meta">
                        <span className="experience-company">{exp.company}</span>
                        <span className="experience-period">{exp.period}</span>
                      </div>
                      <p className="experience-description">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="about-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="section-title">Education</h2>
                <div className="experience-list">
                  <div className="experience-item">
                    <h3 className="experience-title">Computer science Degree</h3>
                    <div className="experience-meta">
                      <span className="experience-company">ISTIC</span>
                      <span className="experience-period">May 2025</span>
                    </div>
                    <p className="experience-description">
                      Specialized in Computer Science, AI, or related field with a focus on machine learning and computer vision technologies.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
