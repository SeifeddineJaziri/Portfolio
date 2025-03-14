"use client"

// A simple toast hook implementation
import { useState } from "react"

export type ToastProps = {
  title: string
  description?: string
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description, duration = 3000 }: ToastProps) => {
    const id = Date.now()

    // Add toast to the array
    setToasts((prevToasts) => [...prevToasts, { title, description, duration }])

    // Remove toast after duration
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.title !== title))
    }, duration)
  }

  return { toast, toasts }
}

