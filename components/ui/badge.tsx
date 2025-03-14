import React from "react"
import "../../styles/components.css"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
  className?: string
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ variant = "default", className = "", ...props }, ref) => {
  const baseClass = "badge"
  const variantClass = variant === "default" ? "" : `badge-${variant}`
  const combinedClass = `${baseClass} ${variantClass} ${className}`

  return <div className={combinedClass} ref={ref} {...props} />
})

Badge.displayName = "Badge"

export { Badge }

