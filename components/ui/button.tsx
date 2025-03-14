import React from "react"
import "../../styles/components.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  className?: string
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", asChild = false, className = "", children, ...props }, ref) => {
    const baseClass = "button"
    const variantClass = variant === "default" ? "button-primary" : `button-${variant}`
    const sizeClass = size === "default" ? "button-md" : `button-${size}`
    const combinedClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`

    if (asChild) {
      return <span className={combinedClass}>{children}</span>
    }

    return (
      <button className={combinedClass} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }

