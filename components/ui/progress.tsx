import React from "react"
import "../../styles/components.css"

interface ProgressProps {
  value?: number
  className?: string
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(({ value = 0, className = "", ...props }, ref) => {
  return (
    <div className={`progress-container ${className}`} ref={ref} {...props}>
      <div className="progress-bar" style={{ width: `${value}%` }} />
    </div>
  )
})

Progress.displayName = "Progress"

export { Progress }

