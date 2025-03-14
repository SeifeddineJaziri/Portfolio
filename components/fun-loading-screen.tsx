"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const funnyLoadingMessages = [
  "Convincing pixels to form shapes...",
  "Teaching polygons to dance...",
  "Bribing the 3D engine with coffee...",
  "Untangling the spaghetti code...",
  "Polishing the virtual chrome...",
  "Feeding the hamsters powering the servers...",
  "Generating random excuses for the delay...",
  "Downloading more RAM...",
  "Reticulating splines...",
  "Calculating the meaning of life...",
]

interface FunLoadingScreenProps {
  onComplete?: () => void
}

export default function FunLoadingScreen({ onComplete }: FunLoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [showSkip, setShowSkip] = useState(false)

  // Cycle through funny messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % funnyLoadingMessages.length)
    }, 2000)

    return () => clearInterval(messageInterval)
  }, [])

  // Progress bar and completion
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    // Show skip button after 3 seconds
    const skipTimer = setTimeout(() => {
      setShowSkip(true)
    }, 3000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(skipTimer)
    }
  }, [])

  // Complete loading when progress reaches 100%
  useEffect(() => {
    if (progress >= 100 && onComplete) {
      setTimeout(() => {
        onComplete()
      }, 500)
    }
  }, [progress, onComplete])

  // Handle skip button click
  const handleSkip = () => {
    if (onComplete) {
      onComplete()
    }
  }

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Bouncing 3D cubes */}
      <div className="relative w-40 h-40 mb-8">
        <motion.div
          className="absolute w-20 h-20 bg-purple-500 rounded-lg"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-pink-500 rounded-lg"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-20 h-20 bg-blue-500 rounded-lg"
          animate={{
            x: [0, 0, 0],
            y: [0, 40, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.h2
        className="text-2xl font-bold text-white mb-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        Building Awesome 3D Experience
      </motion.h2>

      <motion.p
        className="text-purple-300 mb-8 h-6 text-center"
        key={messageIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {funnyLoadingMessages[messageIndex]}
      </motion.p>

      {/* Progress bar */}
      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
        />
      </div>

      {/* Skip button */}
      {showSkip && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Button variant="ghost" className="text-white/70 hover:text-white mt-4" onClick={handleSkip}>
            Skip Intro
          </Button>
        </motion.div>
      )}
    </div>
  )
}

