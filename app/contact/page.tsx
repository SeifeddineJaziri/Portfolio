"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { useToast } from "../../hooks/use-toast"
import Link from "next/link"

import "../../styles/globals.css"
import "../../styles/contact.css"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Inside your handleSubmit function
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    // Send the form data to our API route
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to send message');
    }

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error('Error sending message:', error);
    toast({
      title: "Error sending message",
      description: "Please try again later or contact me directly via email.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
}

  return (
    <div className="contact-page">
      <Button variant="ghost" className="back-button" asChild>
        <Link href="/">
          <ArrowLeft className="icon-left" />
          Back to Home
        </Link>
      </Button>

      <div className="contact-container">
        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-form-container">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-description">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  required
                  className="form-textarea"
                />
              </div>

              <Button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="loading-indicator">
                    <svg className="spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="spinner-track"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="spinner-path"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="button-content">
                    <Send className="icon-left" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>

          <div className="contact-info-container">
            <div className="contact-sphere-placeholder">
              <div className="sphere"></div>
            </div>

            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon-container">
                    <Mail className="info-icon" />
                  </div>
                  <div>
                    <h3 className="info-label">Email</h3>
                    <p className="info-value">seifeddinejaziri123@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-container">
                    <Phone className="info-icon" />
                  </div>
                  <div>
                    <h3 className="info-label">Phone</h3>
                    <p className="info-value">+216 54 233 009</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon-container">
                    <MapPin className="info-icon" />
                  </div>
                  <div>
                    <h3 className="info-label">Location</h3>
                    <p className="info-value">Tunis, El Mourouj 6</p>
                  </div>
                </div>
              </div>

              <div className="working-hours">
                <h3 className="hours-title">Working Hours</h3>
                <p className="hours-value">Monday - Friday: 9am - 6pm PST</p>
                <p className="hours-value">Weekend: Available for urgent matters</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

