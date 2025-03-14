import React from "react"
import "../../styles/components.css"

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = "", ...props }, ref) => {
  return <textarea className={`textarea ${className}`} ref={ref} {...props} />
})

Textarea.displayName = "Textarea"

export { Textarea }

