import React from "react"
import "../../styles/components.css"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className = "", ...props }, ref) => {
  return <input className={`input ${className}`} ref={ref} {...props} />
})

Input.displayName = "Input"

export { Input }

