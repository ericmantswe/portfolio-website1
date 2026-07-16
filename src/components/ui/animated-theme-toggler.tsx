"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedThemeTogglerProps {
  className?: string;
  variant?: "default" | "diamond";
}

export function AnimatedThemeToggler({ className, variant = "default" }: AnimatedThemeTogglerProps) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("relative h-9 w-9", className)}>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-9 w-9 overflow-hidden transition-all duration-300",
        variant === "diamond" && "rotate-45 hover:rotate-[225deg] border border-primary/20 hover:border-primary/50",
        className
      )}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: 20, opacity: 0, rotate: variant === "diamond" ? -45 : 0 }}
          animate={{ y: 0, opacity: 1, rotate: variant === "diamond" ? -45 : 0 }}
          exit={{ y: -20, opacity: 0, rotate: variant === "diamond" ? -45 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center w-full h-full"
        >
          {isDark ? (
            <Moon className="h-[1.1rem] w-[1.1rem]" />
          ) : (
            <Sun className="h-[1.1rem] w-[1.1rem]" />
          )}
        </motion.div>
      </AnimatePresence>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
