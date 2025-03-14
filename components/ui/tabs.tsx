"use client"

import React from "react"
import "../../styles/components.css"

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
  className?: string
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onValueChange, className = "", children, ...props }, ref) => {
    return (
      <div className={`tabs ${className}`} ref={ref} {...props} data-value={value}>
        {children}
      </div>
    )
  },
)
Tabs.displayName = "Tabs"

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(({ className = "", ...props }, ref) => {
  return <div className={`tabs-list ${className}`} ref={ref} {...props} />
})
TabsList.displayName = "TabsList"

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  className?: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, className = "", ...props }, ref) => {
    const tabs = React.useContext(TabsContext)
    const isActive = tabs?.value === value

    return (
      <button
        className={`tabs-trigger ${isActive ? "tabs-trigger-active" : ""} ${className}`}
        ref={ref}
        onClick={() => tabs?.onValueChange(value)}
        data-state={isActive ? "active" : "inactive"}
        {...props}
      />
    )
  },
)
TabsTrigger.displayName = "TabsTrigger"

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  className?: string
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(({ value, className = "", ...props }, ref) => {
  const tabs = React.useContext(TabsContext)
  const isActive = tabs?.value === value

  if (!isActive) return null

  return (
    <div className={`tabs-content ${className}`} ref={ref} data-state={isActive ? "active" : "inactive"} {...props} />
  )
})
TabsContent.displayName = "TabsContent"

// Create a context to share the active tab value
interface TabsContextValue {
  value: string
  onValueChange: (value: string) => void
}

const TabsContext = React.createContext<TabsContextValue | null>(null)

// Add CSS for tabs to components.css
const TabsStyle = () => {
  React.useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      .tabs {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      
      .tabs-list {
        display: flex;
        background-color: rgba(0, 0, 0, 0.4);
        border-radius: 0.375rem;
        overflow: hidden;
      }
      
      .tabs-trigger {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.75rem 1rem;
        font-size: 0.875rem;
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      
      .tabs-trigger-active {
        background-color: rgba(139, 92, 246, 0.2);
      }
      
      .tabs-content {
        margin-top: 1rem;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsStyle }

