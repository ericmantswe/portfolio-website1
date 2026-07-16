"use client"

import { cn } from "@/lib/utils"

interface ProgressiveBlurProps {
  position?: "top" | "bottom" | "left" | "right"
  height?: string
  width?: string
  className?: string
  intensity?: number
}

export function ProgressiveBlur({
  position = "bottom",
  height = "100%",
  width = "100%",
  className,
  intensity = 8,
}: ProgressiveBlurProps) {
  const isVertical = position === "top" || position === "bottom"
  
  return (
    <div
      className={cn(
        "pointer-events-none absolute z-[5]",
        position === "top" && "top-0 left-0 right-0",
        position === "bottom" && "bottom-0 left-0 right-0",
        position === "left" && "top-0 left-0 bottom-0",
        position === "right" && "top-0 right-0 bottom-0",
        className
      )}
      style={{
        height: isVertical ? height : "100%",
        width: isVertical ? "100%" : width,
      }}
    >
      {[...Array(intensity)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${Math.pow(1.8, i + 1)}px)`,
            maskImage: `linear-gradient(to ${
              position === "top" ? "bottom" : 
              position === "bottom" ? "top" : 
              position === "left" ? "right" : "left"
            }, rgba(0,0,0,0) ${i * (100 / intensity)}%, rgba(0,0,0,1) ${(i + 1) * (100 / intensity)}%)`,
            WebkitMaskImage: `linear-gradient(to ${
              position === "top" ? "bottom" : 
              position === "bottom" ? "top" : 
              position === "left" ? "right" : "left"
            }, rgba(0,0,0,0) ${i * (100 / intensity)}%, rgba(0,0,0,1) ${(i + 1) * (100 / intensity)}%)`,
          }}
        />
      ))}
    </div>
  )
}
