import * as React from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "feature" | "pricing" | "testimonial"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "glass-card p-6",
      feature: "glass-card p-8 hover:scale-105 transition-all duration-300 hover:glow-primary",
      pricing: "glass-card p-8 relative overflow-hidden hover:scale-105 transition-all duration-300",
      testimonial: "glass-card p-6 hover:scale-105 transition-all duration-300"
    }

    return (
      <div
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      />
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }